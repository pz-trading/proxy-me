import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api_routes import router as api_router
from frontend_router import router as frontend_router
from fastapi.staticfiles import StaticFiles
from utils import static_dir
from settings import DOMAIN_NAME

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


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=DOMAIN_NAME,
        port=8000,
        reload=True
    )
