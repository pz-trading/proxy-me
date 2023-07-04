from sqlalchemy import Boolean, Column, Integer, String, DateTime, ForeignKey, JSON, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


class UsersModel(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True)
    hashed_password = Column(String)
    access_level = Column(Integer, default=3)
    # 1 = Superadmin
    # 2 = Admin
    # 3 = Management


class GroupsModel(Base):
    __tablename__ = 'groups'
    id = Column(Integer, primary_key=True, index=True)
    department = Column(String)
    status = Column(Boolean, default=True)

    member = relationship(
        "MembersModel", back_populates="groups")
    config = relationship(
        "ConfigModel", back_populates="department")


class MembersModel(Base):
    __tablename__ = 'members'
    id = Column(Integer, primary_key=True, index=True)
    fullname = Column(String)
    email = Column(String, unique=True)
    status = Column(Boolean, default=True)  # Active / Inactive

    group_id = Column(Integer, ForeignKey("groups.id"))
    groups = relationship(
        "GroupsModel", back_populates="member")

    contacts = relationship(
        "ContactsModel", back_populates="member")


class ContactsModel(Base):
    __tablename__ = 'contacts'
    id = Column(Integer, primary_key=True, index=True)
    sim_number = Column(String)

    member_id = Column(Integer, ForeignKey("members.id"))
    member = relationship(
        "MembersModel", back_populates="contacts")


class ConfigModel(Base):
    __tablename__ = 'config'
    id = Column(Integer, primary_key=True, index=True)
    ip = Column(String)
    port = Column(Integer)
    url = Column(String)
    mode = Column(String)
    status = Column(Boolean, default=False)  # Active / Inactive

    department_id = Column(Integer, ForeignKey("groups.id"), nullable=True)
    department = relationship("GroupsModel", back_populates="config")
