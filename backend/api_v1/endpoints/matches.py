from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from db.session import GetSQLDB
from models.football import Match
from schemas.football import MatchSchema

router = APIRouter()

@router.get("/", response_model=List[MatchSchema])
def get_matches(db: Session = Depends(GetSQLDB()), area_id: str = None, competition: str = None):
    query = db.query(Match)
    
    if area_id:
        query = query.filter(Match.area_id == area_id)
    if competition:
        query = query.filter(Match.competition == competition)
    matches = query.all()

    for match in matches:
        match.date = match.date.isoformat()  
    
    return matches


@router.get("/leagues", response_model=List[str])
def get_list_leagues(db: Session = Depends(GetSQLDB())):
    query = db.query(Match.competition).distinct().all()
    leagues = [league[0] for league in query]
    
    return leagues

@router.post("/", response_model=MatchSchema)
def create_match(match: MatchSchema, db: Session = Depends(GetSQLDB())):
    new_match = Match(**match.dict())
    db.add(new_match)
    db.commit()
    db.refresh(new_match)
    return new_match
