from fastapi import APIRouter, Depends, status
from fastapi.requests import Request
from fastapi.responses import Response, JSONResponse
from sqlalchemy.orm import Session

from database import get_db

import models
router = APIRouter()


@router.get("/get-config")
async def getConfiguration(
    request: Request,
    mobile_number: str = "",
    mode: str = "Development",
    db: Session = Depends(get_db)
):

    # data = {'mobile_number': '09065546730', 'mode': 'Development'}
    try:
        contact = db.query(models.ContactsModel).filter(
            models.ContactsModel.sim_number == mobile_number,
            models.MembersModel.status == True).first()
        if contact is not None:
            department = contact.member.groups.department
            owner = contact.member
            config = db.query(models.ConfigModel).filter(
                models.ConfigModel.mode == mode).first()

            if config is not None:
                return {
                    "fullname": owner.fullname,
                    "email": owner.email,
                    "url": config.url,
                    "ip": config.ip,
                    "port": config.port,
                    "department": department
                }
    finally:
        db.close()

    return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Please coordinate to the administrator to activate your mobile device to access this app.", "session_status": False})
