from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db.session import GetSQLDB
from models.football import Team, Area, Player
from schemas.football import TeamSchema

router = APIRouter()

@router.get("/", response_model=List[TeamSchema])
def get_teams(db: Session = Depends(GetSQLDB())):
    teams_with_details = (
        db.query(Team, Area, Player)
        .join(Area, Team.area_id == Area.id)
        .join(Player, Player.team_id == Team.id)
        .all()
    )

    teams_dict = {}

    for team, area, player in teams_with_details:
        if team.id not in teams_dict:
            teams_dict[team.id] = {
                "id": team.id,
                "name": team.name,
                "home_city": team.home_city,
                "area_id": team.area_id,
                "area_name": area.country,
                "players_list": [player.name],  
            }
        else:
            teams_dict[team.id]["players_list"].append(player.name)
    
    return [
        TeamSchema(
            id=team["id"],
            name=team["name"],
            home_city=team["home_city"],
            area_id=team["area_id"],
            area_name=team["area_name"],
            players_list=team["players_list"]
        ) 
        for team in teams_dict.values()
    ]



@router.get("/{team_id}", response_model=TeamSchema)
def get_team(team_id: int, db: Session = Depends(GetSQLDB())):
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    return team



# @router.post("/", response_model=TeamSchema)
# def create_team(team: TeamSchema, db: Session = Depends(GetSQLDB())):
#     new_team = Team(**team.dict())
#     db.add(new_team)
#     db.commit()
#     db.refresh(new_team)
#     return new_team