from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.profile import ProfileCreate, ProfileResponse, ProfileUpdate
from app.crud.profile import create_profile, get_profile, update_profile, delete_profile
from app.database.connection import get_db

router = APIRouter(prefix="/profile", tags=["Profile"])

@router.post("/", response_model=ProfileResponse)
def create_new_profile(profile: ProfileCreate, db: Session = Depends(get_db)):
    return create_profile(db=db, profile=profile)

@router.get("/{profile_id}", response_model=ProfileResponse)
def read_profile(profile_id: int, db: Session = Depends(get_db)):
    db_profile = get_profile(db=db, profile_id=profile_id)
    if not db_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return db_profile

@router.put("/{profile_id}", response_model=ProfileResponse)
def update_existing_profile(profile_id: int, profile: ProfileUpdate, db: Session = Depends(get_db)):
    return update_profile(db=db, profile_id=profile_id, profile_update=profile)

@router.delete("/{profile_id}", response_model=ProfileResponse)
def delete_existing_profile(profile_id: int, db: Session = Depends(get_db)):
    return delete_profile(db=db, profile_id=profile_id)
