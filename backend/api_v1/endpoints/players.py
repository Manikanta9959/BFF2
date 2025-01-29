from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Union

from db.session import GetSQLDB
from models.football import Player, Team
from schemas.football import PlayerSchema

router = APIRouter()

@router.get("/", response_model=Union[List[PlayerSchema], List[str]])
def get_players(db: Session = Depends(GetSQLDB()), team_id: int = None):
    query = db.query(Player, Team).join(Team, Team.id == Player.team_id)

    players = query.all()
    if team_id:
        query = query.filter(Player.team_id == team_id)
        return [player.name for player, team in query]
    
    result = [
        {
            "id": player.id,
            "name": player.name,
            "position": player.position,
            "nationality": player.nationality,
            "team": team.name,
        }
        for player, team in players
    ]

    return result

# @router.post("/", response_model=PlayerSchema)
# def create_player(player: PlayerSchema, db: Session = Depends(GetSQLDB())):
#     new_player = Player(**player.dict())
#     db.add(new_player)
#     db.commit()
#     db.refresh(new_player)
#     return new_player

@router.get("/{player_id}", response_model=PlayerSchema)
def get_player(player_id: int, db: Session = Depends(GetSQLDB())):
    player = db.query(Player).filter(Player.id == player_id).first()
    if not player:
        raise HTTPException(status_code=404, detail="Player not found")
    return player

