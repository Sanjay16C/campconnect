from sqlalchemy.orm import Session
from app.models.profile import Profile
from app.schemas.profile import ProfileCreate, ProfileUpdate

def create_profile(db: Session, profile: ProfileCreate):
    db_profile = Profile(**profile.dict())
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

def get_profile(db: Session, profile_id: int):
    return db.query(Profile).filter(Profile.id == profile_id).first()

def update_profile(db: Session, profile_id: int, profile_update: ProfileUpdate):
    db_profile = get_profile(db, profile_id)
    for field, value in profile_update.dict(exclude_unset=True).items():
        setattr(db_profile, field, value)
    db.commit()
    db.refresh(db_profile)
    return db_profile

def delete_profile(db: Session, profile_id: int):
    db_profile = get_profile(db, profile_id)
    db.delete(db_profile)
    db.commit()
    return db_profile
