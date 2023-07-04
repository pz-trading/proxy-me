from fastapi import APIRouter, Depends, status
from fastapi.requests import Request
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder
from utils import templates
from sqlalchemy.orm import Session
from database import get_db
from decorators import user_token_required

import models
import validators

router = APIRouter()


@router.get("/")
@user_token_required
async def admin_index(request: Request):

    context = {
        "request": request,
        "title": "Proxy Me - Admin"
    }
    return templates.TemplateResponse("index.html", context)


@router.get("/api/get-users")
@user_token_required
async def get_users(request: Request):
    db: Session = get_db()
    users = db.query(models.UsersModel).all()

    users_data = jsonable_encoder(users)

    return JSONResponse(status_code=200, content={"rows": users_data})


@router.post("/api/save-user/")
@user_token_required
async def save_user(
        request: Request):

    data = await request.json()
    print(">>>>>>>>>>>", data)
    errors = []

    if 'email' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Missing Email Address.',
            'field': 'email'
        })
    else:
        if not validators.email(data['email']):
            errors.append({
                'error_code': 400,
                'error_message': 'Invalid Email Address.',
                'field': 'email'
            })
    if 'access_level' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Missing Access Level.',
            'field': 'access_level'
        })
    else:
        if not data['access_level'] >= 1 and data['access_level'] <= 3:
            errors.append({
                'error_code': 400,
                'error_message': 'Invalid Access Level. Allowed range is 1 to 3 only.',
                'field': 'access_level'
            })

    if 'request_reset' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Missing request reset data.',
            'field': 'request_reset'
        })
    else:
        if data['request_reset']:
            if len(data['reset_password_code']) != 5:
                errors.append({
                    'error_code': 400,
                    'error_message': 'Reset password code MUST be 5 characters long.',
                    'field': 'reset_password_code'
                })

    if len(errors):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

    db: Session = get_db()
    if data['for_update']:
        user = db.query(models.UsersModel).filter(
            models.UsersModel.id == data['id']).first()

        if user:
            # Update the attributes with the new data
            user.email = data['email']
            user.access_level = data['access_level']
            user.request_reset = data['request_reset']
            user.reset_password_code = data['reset_password_code'] if data['request_reset'] else ""
            # Commit the changes to the database
            db.commit()

            # Refresh the instance to reflect any changes made by the database
            db.refresh(user)
        else:
            errors.append({
                'error_code': 400,
                'error_message': 'Unable to update Member\'s information.',
                'field': 'all'
            })
            return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})
    else:
        user = db.query(models.UsersModel).filter(
            models.UsersModel.email == data['email']
        ).first()

        if user:
            errors.append({
                'error_code': 400,
                'error_message': 'Email address already register.',
                'field': 'email'
            })
        if len(errors):
            return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

        new_user = models.UsersModel(
            email=data['email'],
            access_level=data['access_level'],
            request_reset=True,
            reset_password_code=data['reset_password_code']
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        data = jsonable_encoder(new_user)

    return JSONResponse(status_code=status.HTTP_200_OK, content={"data": data})


@router.post("/api/delete-user/")
@user_token_required
async def delete_user(request: Request):
    data = await request.json()
    db: Session = get_db()

    user = db.query(models.UsersModel).filter(
        models.UsersModel.id == data['id']).first()

    if user:
        db.delete(user)
        db.commit()
        db.close()

        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Successfully Deleted"})

    else:
        db.close()
        raise JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={
                           "error_message": "Member not found"})
