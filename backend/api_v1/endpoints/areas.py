from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from db import get_db
from models import Area
from schemas import Area

router = APIRouter(
    prefix="/areas",
    tags=["areas"]
)

@router.get("/", response_model=List[Area])
def get_areas(db: Session = Depends(get_db)):
    return db.query(Area).all()

@router.post("/", response_model=Area)
def create_area(area: Area, db: Session = Depends(get_db)):
    new_area = Area(**area.dict())
    db.add(new_area)
    db.commit()
    db.refresh(new_area)
    return new_area
