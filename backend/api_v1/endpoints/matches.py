from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from db.session import GetSQLDB
from models.football import Match
from schemas.football import MatchSchema

router = APIRouter()

@router.get("/", response_model=List[MatchSchema])
def get_matches(db: Session = Depends(GetSQLDB()), location: str = None, competition: str = None):
    query = db.query(Match)
    if location:
        query = query.filter(Match.location == location)
    if competition:
        query = query.filter(Match.competition == competition)
    return query.all()

@router.post("/", response_model=MatchSchema)
def create_match(match: MatchSchema, db: Session = Depends(GetSQLDB())):
    new_match = Match(**match.dict())
    db.add(new_match)
    db.commit()
    db.refresh(new_match)
    return new_match
