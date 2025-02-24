from pydantic import BaseModel, EmailStr
from typing import List, Dict

class ProfileBase(BaseModel):
    name: str
    department: str
    college_email: EmailStr
    roll_no: str
    phone: str
    address: str
    profile_type: str
    bio: str
    personal_traits: List[str]
    social_links: Dict[str, str]
    skills: Dict[str, int]

class ProfileCreate(ProfileBase):
    pass

class ProfileUpdate(ProfileBase):
    pass

class ProfileResponse(ProfileBase):
    id: int
    class Config:
        orm_mode = True
