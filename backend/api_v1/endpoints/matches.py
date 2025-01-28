from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from db import get_db
from models import Match
from schemas import Match, MatchCreate

router = APIRouter(
    prefix="/matches",
    tags=["matches"]
)

@router.get("/", response_model=List[Match])
def get_matches(db: Session = Depends(get_db), location: str = None, competition: str = None):
    query = db.query(Match)
    if location:
        query = query.filter(Match.location == location)
    if competition:
        query = query.filter(Match.competition == competition)
    return query.all()

@router.post("/", response_model=Match)
def create_match(match: MatchCreate, db: Session = Depends(get_db)):
    new_match = Match(**match.dict())
    db.add(new_match)
    db.commit()
    db.refresh(new_match)
    return new_match
