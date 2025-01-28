from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from db.session import GetSQLDB
from models.football import Area
from schemas.football import AreaSchema

router = APIRouter()

@router.get("/", response_model=List[AreaSchema])
def get_areas(db: Session = Depends(GetSQLDB())):
    return db.query(Area).all()

@router.post("/", response_model=AreaSchema)
def create_area(area: AreaSchema, db: Session = Depends(GetSQLDB())):
    new_area = Area(**area.dict())
    db.add(new_area)
    db.commit()
    db.refresh(new_area)
    return new_area
