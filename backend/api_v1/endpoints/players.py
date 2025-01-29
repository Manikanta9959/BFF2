from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db.session import GetSQLDB
from models.football import Player
from schemas.football import PlayerSchema

router = APIRouter()

@router.get("/", response_model=List[PlayerSchema])
def get_players(db: Session = Depends(GetSQLDB()), team_id: int = None):
    query = db.query(Player)
    if team_id:
        query = query.filter(Player.team_id == team_id)
    return query.all()

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

