from sqlalchemy import Column, Integer, String, JSON
from app.database.connection import Base

class Profile(Base):
    __tablename__ = "profiles"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    department = Column(String)
    college_email = Column(String, unique=True, nullable=False)
    roll_no = Column(String, unique=True)
    phone = Column(String)
    address = Column(String)
    profile_type = Column(String)
    bio = Column(String)
    personal_traits = Column(JSON)
    social_links = Column(JSON)
    skills = Column(JSON)
