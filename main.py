import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from utils import static_dir
from settings import DOMAIN_NAME, PORT

from api_routes import router as api_router
from frontend_router import router as frontend_router
from admin_router import router as admin_router

app = FastAPI()
app.mount("/static", StaticFiles(directory=static_dir), name="static")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(frontend_router, prefix="")
app.include_router(api_router, prefix="/api")
app.include_router(admin_router, prefix="/admin")


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host = os.getenv("DOMAIN_NAME", "0.0.0.0"),
        port = int(os.getenv("PORT", 8000)),
        reload=True
    )
