from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, aliased
from sqlalchemy import func
from typing import List

from db.session import GetSQLDB
from models.football import Match, Team, Area
from schemas.football import MatchSchema

router = APIRouter()

@router.get("/")
def get_matches(db: Session = Depends(GetSQLDB()), area_id: str = None, competition: str = None):
    home_team = aliased(Team)
    away_team = aliased(Team)
    
    query = db.query(
        Match.id,
        Match.home_team_id,
        home_team.name.label("hometeam_name"),  
        Match.away_team_id,
        away_team.name.label("awayteam_name"),  
        Area.city.label("area_name"),
        Match.competition,
        Match.date,
        Match.area_id
    ).join(home_team, Match.home_team_id == home_team.id)  
    query = query.join(away_team, Match.away_team_id == away_team.id) 
    query = query.join(Area, Match.area_id == Area.id) 
    
    

    if area_id:
        query = query.filter(Match.area_id == area_id)
    if competition:
        query = query.filter(Match.competition == competition)

    matches = query.all()

    matches_serialized = [
        {
            'id': match[0],
            'home_team_id': match[1],
            'hometeam_name': match[2],
            'away_team_id': match[3],
            'awayteam_name': match[4],
            'area_name': match[5],
            'competition': match[6],
            'date': match[7].isoformat(),
            'area_id': match[8]
        }
        for match in matches
    ]
    return matches_serialized


@router.get("/leagues", response_model=List[str])
def get_list_leagues(db: Session = Depends(GetSQLDB())):
    query = db.query(Match.competition).distinct().all()
    leagues = [league[0] for league in query]
    
    return leagues

# @router.post("/", response_model=MatchSchema)
# def create_match(match: MatchSchema, db: Session = Depends(GetSQLDB())):
#     new_match = Match(**match.dict())
#     db.add(new_match)
#     db.commit()
#     db.refresh(new_match)
#     return new_match
