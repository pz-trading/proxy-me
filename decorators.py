from typing import Callable
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from jose import jwt, JWTError, ExpiredSignatureError
from functools import wraps

from settings import config_jwt


def user_token_required(func: Callable):

    @wraps(func)
    async def wrapper(request: Request):
        auth_token = request.cookies.get('access_token')

        # Perform your validation logic here
        if not auth_token:
            return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Missing Token", "session_status": False})
            # return RedirectResponse("/login", status_code=status.HTTP_307_TEMPORARY_REDIRECT)

        try:
            payload = jwt.decode(
                auth_token,
                config_jwt.SECRET_KEY,
                algorithms=[config_jwt.ALGORITHM]
            )

        except ExpiredSignatureError:
            return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Expired session", "session_status": False})
            # return RedirectResponse("/login", status_code=status.HTTP_307_TEMPORARY_REDIRECT)

        except JWTError:
            return JSONResponse(status_code=401, content={"messaage": "Unauthorized Access! Invalid token", "session_status": False})
            # return RedirectResponse("/login", status_code=status.HTTP_307_TEMPORARY_REDIRECT)

        except Exception as e:
            return JSONResponse(status_code=500, content={"messaage": "Internal Server Error! Unable to get data.", "session_status": False})

        return await func(request)
    return wrapper
