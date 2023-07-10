import os

DOMAIN_NAME = "proxyme.net"
PORT = 8000


class config_jwt():
    SECRET_KEY = "1f26f9fcbd3b4b051f3e55ac342822788635b0debc5e1e399c7c14f15f6e24b8"
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 60
    ALLOWED_DOMAINS = "proxyme.net"


class config_database():
    SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:admin123@localhost:5432/proxyme")
    print(SQLALCHEMY_DATABASE_URL)
