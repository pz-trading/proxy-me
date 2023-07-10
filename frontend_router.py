import datetime
from datetime import timedelta
from fastapi import APIRouter, Depends, status
from fastapi.responses import HTMLResponse, JSONResponse, Response
from fastapi.requests import Request
from fastapi.encoders import jsonable_encoder

from jose import JWTError, jwt, ExpiredSignatureError
from utils import authenticate_user, create_access_token
from settings import config_jwt
from database import SessionLocal, get_db
from utils import templates, get_password_hash

from decorators import user_token_required
from sqlalchemy.orm import Session
import models
import validators

router = APIRouter()


@router.get("/reset-password/", response_class=HTMLResponse)
@router.get("/login/", response_class=HTMLResponse)
@router.get("/members/", response_class=HTMLResponse)
@router.get("/contacts/", response_class=HTMLResponse)
@router.get("/groups/", response_class=HTMLResponse)
@router.get("/", response_class=HTMLResponse)
async def index(request: Request):
    context = {
        "request": request,
        "title": "Proxy Me"
    }
    return templates.TemplateResponse("index.html", context)


# backend request api request down here
@router.get("/be-api/verify-user-token/")
async def verify_user_token(request: Request):
    try:
        auth_token = request.cookies.get('access_token')

        if auth_token:

            payload = jwt.decode(
                auth_token,
                config_jwt.SECRET_KEY,
                algorithms=[config_jwt.ALGORITHM],
                options={"verify_exp": True}
            )

            email: str = payload.get("email")
            access_level: int = payload.get("access_level")
            if email:
                return JSONResponse(status_code=200, content={"message": "Authenticated", "email": email, "access_level": access_level, "session_status": True})

            return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Invalid or Missing Token", "session_status": False})
    except ExpiredSignatureError:
        return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Expired session", "session_status": False})

    except JWTError:
        return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Invalid token", "session_status": False})


@router.get("/be-api/logout/")
async def logout(request: Request, response: Response):
    try:
        auth_token = request.cookies.get('access_token')

        if auth_token:
            payload = jwt.decode(auth_token, config_jwt.SECRET_KEY, algorithms=[
                                 config_jwt.ALGORITHM])
            email: str = payload.get("email")
            expiration_datetime = datetime.datetime.now() - datetime.timedelta(hours=1)
            expires = expiration_datetime.strftime(
                "%a, %d %b %Y %H:%M:%S GMT+8")
            return JSONResponse(
                status_code=200,
                content={
                    "message": "Successfully Logout",
                    "email": email
                },
                headers={
                    "Set-Cookie": f"access_token={auth_token}; Expires={expires}; Domain={config_jwt.ALLOWED_DOMAINS}; SameSite=strict; Path=/; HttpOnly"
                }
            )

            # response.delete_cookie(
            #     "access_token", path="/", domain=config_jwt.ALLOWED_DOMAINS, httponly=True, samesite="strict")

            # return JSONResponse(status_code=200, content={"message": "Logout Complete"})
    except JWTError:
        return JSONResponse(status_code=401, content={
            "message": "Invalid Token", "error": "INVALID_TOKEN"})


@router.post("/be-api/login/")
async def login_for_access_token(
        request: Request,
        db: SessionLocal = Depends(get_db)):

    data = await request.json()
    errors = []
    if 'email' not in data:
        errors.append({
            'error_code': status.HTTP_404_NOT_FOUND,
            'error_message': 'Missing Email address',
            'field': 'email'
        })
    else:
        if not validators.email(data['email']):
            errors.append({
                'error_code': status.HTTP_400_BAD_REQUEST,
                'error_message': 'Invalid Email address',
                'field': 'email'
            })

    if 'password' not in data:
        errors.append({
            'error_code': status.HTTP_404_NOT_FOUND,
            'error_message': 'Missing Password',
            'field': 'password'
        })
    else:
        if len(data['password']) < 4:
            errors.append({
                'error_code': status.HTTP_400_BAD_REQUEST,
                'error_message': 'Password Length must be 4 characters long minimum.',
                'field': 'password'
            })
    if len(errors):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

    try:
        user = authenticate_user(db, data['email'], data['password'])
    finally:
        db.close()

    if not user:
        errors.append({
            'error_code': status.HTTP_400_BAD_REQUEST,
            'error_message': 'Invalid email or password. If you are unsure with your credentials, please contact your administrator.',
            'field': 'all'
        })
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

    access_token_expires = timedelta(
        minutes=config_jwt.ACCESS_TOKEN_EXPIRE_MINUTES)

    access_token = create_access_token(
        data={"email": user.email, "access_level": user.access_level},
        expires_delta=access_token_expires
    )

    expiration_datetime = datetime.datetime.now() + access_token_expires
    expires = expiration_datetime.strftime("%a, %d %b %Y %H:%M:%S GMT+8")

    return JSONResponse(
        status_code=200,
        content={
            "message": "Login successful",
            "email": user.email,
            "access_level": user.access_level
        },
        headers={
            "Set-Cookie": f"access_token={access_token}; Expires={expires}; SameSite=strict; Path=/; HttpOnly"},
    )


################## CONFIG #######################


@router.get("/be-api/get-config/")
@user_token_required
async def get_proxy_configurations(
        request: Request):

    db: Session = get_db()
    try:
        configs = db.query(models.ConfigModel).all()
    finally:
        db.close()

    config_data = []

    for config in configs:
        config_dict = config.__dict__
        dp_name = config.department.department if config.department else None
        config_dict['dp_name'] = dp_name
        config_data.append(config_dict)

    config_data = jsonable_encoder(configs)

    return JSONResponse(status_code=200, content={"rows": config_data})


@router.post("/be-api/save-proxy-configuration/")
@user_token_required
async def save_proxy_configurations(
        request: Request):

    data = await request.json()

    errors = []
    if 'url' not in data:
        # return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'error_code': 400, 'error_message': 'Missing Url'})
        errors.append({
            'error_code': 400,
            'error_message': 'Missing URL.',
            'field': 'url'
        })
    else:
        if not validators.url(data['url']):
            # return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={'error_code': 404, 'error_message': 'Invalid Url'})
            errors.append({
                'error_code': 404,
                'error_message': 'Invalid URL.',
                'field': 'url'
            })

    if 'ip' not in data:
        # return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'error_code': 400, 'error_message': 'Missing IP Address'})
        errors.append({
            'error_code': 400,
            'error_message': 'Missing IP Address.',
            'field': 'ip'
        })
    else:
        if not validators.ip_address.ipv4(data['ip']):
            # return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'error_code': 400, 'error_message': 'Invalid IP Address'})
            errors.append({
                'error_code': 400,
                'error_message': 'Invalid IP Address.',
                'field': 'ip'
            })

    def is_valid_port(port):
        try:
            port_number = int(port)
            return 0 <= port_number <= 65535
        except ValueError:
            return False
    if not is_valid_port(data['port']):
        errors.append({
            'error_code': 400,
            'error_message': 'Invalid Port or Port Range not supported.',
            'field': 'port'
        })

    # if 'department' not in data:
    #     errors.append({
    #         'error_code': 400,
    #         'error_message': 'Department is required.',
    #         'field': 'department'
    #     })

    if 'mode' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Mode is required.',
            'field': 'mode'
        })

    db: Session = get_db()
    try:
        query = db.query(models.GroupsModel).filter(
            models.GroupsModel.id == data['department_id']).first()

        if not query:
            errors.append({
                'error_code': 400,
                'error_message': 'Department is required. Please select the correct department.',
                'field': 'department_id'
            })

        if len(errors):
            return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

        # Update all group status to false
        if data['for_update']:
            config = db.query(models.ConfigModel).filter(
                models.ConfigModel.id == data['id']).first()

            if config:
                # Update the attributes with the new data
                config.url = data['url']
                config.ip = data['ip']
                config.port = data['port']
                config.mode = data['mode']
                config.department_id = data['department_id']
                config.status = data['status']
                # Commit the changes to the database
                db.commit()

                # Refresh the instance to reflect any changes made by the database
                db.refresh(config)
            else:
                errors.append({
                    'error_code': 400,
                    'error_message': 'Unable to update configuration.',
                    'field': 'all'
                })
                return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})
        else:
            if data['status'] == True:
                db.query(models.ConfigModel
                        ).filter(models.ConfigModel.department_id == data['department_id']
                                ).update({'status': False})

            new_config = models.ConfigModel(
                url=data['url'],
                ip=data['ip'],
                port=data['port'],
                department_id=data['department_id'],
                mode=data['mode'],
                status=False  # for add new configuration make sure to set the Status to false first

            )

            db.add(new_config)
            db.commit()
            db.refresh(new_config)
            data = jsonable_encoder(new_config)
    finally:
        db.close()

    return JSONResponse(status_code=status.HTTP_200_OK, content={"data": data})


@router.post("/be-api/delete-proxy-configuration/")
@user_token_required
async def delete_proxy_configuration(request: Request):
    data = await request.json()
    db: Session = get_db()

    config = db.query(models.ConfigModel).filter(
        models.ConfigModel.id == data['id']).first()

    if config:
        db.delete(config)
        db.commit()
        db.close()

        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Successfully Deleted"})

    else:
        db.close()
        raise JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={
                           "error_message": "Config not found"})


################## GROUP ########################


@router.get("/be-api/get-groups/")
@user_token_required
async def get_groups(request: Request):
    db: Session = get_db()
    try:
        groups = db.query(models.GroupsModel).all()
    finally:
        db.close()
    groups_data = jsonable_encoder(groups)
    return JSONResponse(status_code=status.HTTP_200_OK, content={"rows": groups_data})


@router.post("/be-api/save-group-settings/")
@user_token_required
async def save_group_settings(
        request: Request):

    data = await request.json()

    errors = []

    if 'department' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Department is required.',
            'field': 'department'
        })

    if len(errors):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

    db: Session = get_db()
    try:
        if data['for_update']:
            group = db.query(models.GroupsModel).filter(
                models.GroupsModel.id == data['id']).first()

            if group:
                # Update the attributes with the new data
                group.department = data['department']
                group.status = data['status']
                # Commit the changes to the database
                db.commit()

                # Refresh the instance to reflect any changes made by the database
                db.refresh(group)
            else:
                errors.append({
                    'error_code': 400,
                    'error_message': 'Unable to update group settings.',
                    'field': 'all'
                })
                return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})
        else:

            new_group = models.GroupsModel(
                department=data['department'],
                status=False  # for add new configuration make sure to set the Status to false first
            )

            db.add(new_group)
            db.commit()
            db.refresh(new_group)
            data = jsonable_encoder(new_group)
    finally:
        db.close()

    return JSONResponse(status_code=status.HTTP_200_OK, content={"data": data})


@router.post("/be-api/delete-group-settings/")
@user_token_required
async def delete_group_settings(request: Request):
    data = await request.json()
    db: Session = get_db()

    group = db.query(models.GroupsModel).filter(
        models.GroupsModel.id == data['id']).first()

    if group:
        db.delete(group)
        db.commit()
        db.close()

        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Successfully Deleted"})

    else:
        db.close()
        raise JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={
                           "error_message": "Group not found"})


######################## MEMBES #############################

@router.get("/be-api/get-member/")
@user_token_required
async def get_proxy_configurations(
        request: Request):

    db: Session = get_db()
    try:
        members = db.query(models.MembersModel).all()
    finally:
        db.close()
    member_data = []

    for member in members:
        member_dict = member.__dict__
        dp_name = member.groups.department if member.groups else None
        member_dict['dp_name'] = dp_name
        member_data.append(member_dict)

    member_data = jsonable_encoder(members)

    return JSONResponse(status_code=200, content={"rows": member_data})


@router.post("/be-api/save-member/")
@user_token_required
async def save_proxy_configurations(
        request: Request):

    data = await request.json()

    errors = []
    if 'fullname' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Missing Fullname',
            'field': 'fullname'
        })
    else:
        if len(data['fullname']) <= 5:
            errors.append({
                'error_code': 404,
                'error_message': 'Invalid Fullname length. Expecting at least 6 character lenght.',
                'field': 'fullname'
            })

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

    db: Session = get_db()
    try:
        query = db.query(models.GroupsModel).filter(
            models.GroupsModel.id == data['group_id']).first()

        if not query:
            errors.append({
                'error_code': 400,
                'error_message': 'Department is required. Please select the correct department.',
                'field': 'group_id'
            })
            # return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

        if len(errors):
            return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

        if data['for_update']:
            member = db.query(models.MembersModel).filter(
                models.MembersModel.id == data['id']).first()

            if member:
                # Update the attributes with the new data
                member.fullname = data['fullname']
                member.email = data['email']
                member.group_id = data['group_id']
                member.status = data['status']
                # Commit the changes to the database
                db.commit()

                # Refresh the instance to reflect any changes made by the database
                db.refresh(member)
            else:
                errors.append({
                    'error_code': 400,
                    'error_message': 'Unable to update Member\'s information.',
                    'field': 'all'
                })
                return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})
        else:

            new_member = models.MembersModel(
                fullname=data['fullname'],
                email=data['email'],
                group_id=query.id,
                status=False  # for add new configuration make sure to set the Status to false first

            )

            db.add(new_member)
            db.commit()
            db.refresh(new_member)
            data = jsonable_encoder(new_member)
    finally:
        db.close()

    return JSONResponse(status_code=status.HTTP_200_OK, content={"data": data})


@router.post("/be-api/delete-member/")
@user_token_required
async def delete_member(request: Request):
    data = await request.json()
    db: Session = get_db()

    member = db.query(models.MembersModel).filter(
        models.MembersModel.id == data['id']).first()

    if member:
        db.delete(member)
        db.commit()
        db.close()

        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Successfully Deleted"})

    else:
        db.close()
        raise JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={
                           "error_message": "Member not found"})


##################### CONTACTS ##########################

@router.get("/be-api/get-contacts/")
@user_token_required
async def get_proxy_configurations(
        request: Request):

    db: Session = get_db()
    try:
        contacts = db.query(models.ContactsModel).all()
    finally:
        db.close()

    contact_data = []

    for contact in contacts:
        contact_dict = contact.__dict__
        fullname = contact.member.fullname if contact.member else None
        email = contact.member.email if contact.member else None
        contact_dict['fullname'] = fullname
        contact_dict['email'] = email
        contact_data.append(contact_dict)

    contact_data = jsonable_encoder(contacts)

    return JSONResponse(status_code=200, content={"rows": contact_data})


@router.post("/be-api/save-contacts/")
@user_token_required
async def save_contacts(
        request: Request):

    data = await request.json()

    errors = []
    if 'sim_number' not in data:
        errors.append({
            'error_code': 400,
            'error_message': 'Missing Sim Number',
            'field': 'sim_number'
        })
    else:
        if len(data['sim_number']) <= 5:
            errors.append({
                'error_code': 404,
                'error_message': 'Invalid Sim length. Expecting at least 6 character lenght.',
                'field': 'fullname'
            })

    db: Session = get_db()
    try:
        query = db.query(models.MembersModel).filter(
            models.MembersModel.id == data['member_id']).first()

        if not query:
            errors.append({
                'error_code': 400,
                'error_message': 'Member is required. Please select the member to who is this number is assign to.',
                'field': 'member_id'
            })

        if len(errors):
            return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

        if data['for_update']:
            contact = db.query(models.ContactsModel).filter(
                models.ContactsModel.id == data['id']).first()

            if contact:
                # Update the attributes with the new data
                contact.sim_number = data['sim_number']
                contact.member_id = data['member_id']
                # Commit the changes to the database
                db.commit()

                # Refresh the instance to reflect any changes made by the database
                db.refresh(contact)
            else:
                errors.append({
                    'error_code': 400,
                    'error_message': 'Unable to update Member\'s information.',
                    'field': 'all'
                })
                return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})
        else:

            new_contact = models.ContactsModel(
                sim_number=data['sim_number'],
                member_id=data['member_id']
            )

            db.add(new_contact)
            db.commit()
            db.refresh(new_contact)
            data = jsonable_encoder(new_contact)
    finally:
        db.close()

    return JSONResponse(status_code=status.HTTP_200_OK, content={"data": data})


@router.post("/be-api/delete-contacts/")
@user_token_required
async def delete_contacts(request: Request):
    data = await request.json()
    db: Session = get_db()

    contact = db.query(models.ContactsModel).filter(
        models.ContactsModel.id == data['id']).first()

    if contact:
        db.delete(contact)
        db.commit()
        db.close()

        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Successfully Deleted"})

    else:
        db.close()
        raise JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={
                           "error_message": "Member not found"})


########################### RESET PASSWORD ###########################
@router.post("/be-api/reset-password/")
async def reset_password(request: Request):

    data = await request.json()

    errors = []
    if 'email' not in data:
        errors.append({
            'error_code': status.HTTP_404_NOT_FOUND,
            'error_message': 'Missing Email address',
            'field': 'email'
        })
    else:
        if not validators.email(data['email']):
            errors.append({
                'error_code': status.HTTP_400_BAD_REQUEST,
                'error_message': 'Invalid Email address',
                'field': 'email'
            })

    if 'password' not in data:
        errors.append({
            'error_code': status.HTTP_404_NOT_FOUND,
            'error_message': 'Missing Password',
            'field': 'password'
        })
    else:
        if len(data['password']) < 4:
            errors.append({
                'error_code': status.HTTP_400_BAD_REQUEST,
                'error_message': 'Password Length must be 4 characters long minimum.',
                'field': 'password'
            })

    if 'password2' not in data:
        errors.append({
            'error_code': status.HTTP_404_NOT_FOUND,
            'error_message': 'Missing Confirmation Password',
            'field': 'password2'
        })
    else:
        if data['password'] != data['password2']:
            errors.append({
                'error_code': status.HTTP_412_PRECONDITION_FAILED,
                'error_message': 'Password confirmation mismatch',
                'field': 'password2'
            })

    if 'resetPasswordCode' not in data:
        errors.append({
            'error_code': status.HTTP_404_NOT_FOUND,
            'error_message': 'Missing Security Code',
            'field': 'reset_password_code'
        })
    else:
        if len(data['resetPasswordCode']) != 5:
            errors.append({
                'error_code': status.HTTP_412_PRECONDITION_FAILED,
                'error_message': 'Security code MUST be 5 characters long.',
                'field': 'reset_password_code'
            })

    if len(errors):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={'errors': errors})

    db: Session = get_db()
    try:
        user = db.query(models.UsersModel).filter(
            models.UsersModel.email == data['email']
        ).first()

        if not user:
            errors.append({
                'error_code': status.HTTP_404_NOT_FOUND,
                'error_message': 'Missing Email address',
                'field': 'email'
            })
            return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content={'errors': errors})

        if not user.request_reset:
            errors.append({
                'error_code': status.HTTP_401_UNAUTHORIZED,
                'error_message': 'Request not Authorized! Please contact the administrator and request for a reset password',
                'field': 'all'
            })
            return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={'errors': errors})

        if user.reset_password_code != data['resetPasswordCode']:
            errors.append({
                'error_code': status.HTTP_401_UNAUTHORIZED,
                'error_message': 'Request not Authorized! Please contact the administrator and request for a reset password',
                'field': 'all'
            })
            return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={'errors': errors})

        user.request_reset = False
        user.reset_password_code = ""
        user.hashed_password = get_password_hash(data['password'])

        # Commit the changes to the database
        db.commit()

        # Refresh the instance to reflect any changes made by the database
        db.refresh(user)
    finally:
        db.close()

    return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Successfully reset password"})
