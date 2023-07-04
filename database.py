from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from settings import config_database

engine = create_engine(config_database.SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    return SessionLocal()
