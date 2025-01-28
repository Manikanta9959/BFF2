from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db import get_db
from models import Player
from schemas import Player, PlayerCreate

router = APIRouter(
    prefix="/players",
    tags=["players"]
)

@router.get("/", response_model=List[Player])
def get_players(db: Session = Depends(get_db), team_id: int = None):
    query = db.query(Player)
    if team_id:
        query = query.filter(Player.team_id == team_id)
    return query.all()

@router.post("/", response_model=Player)
def create_player(player: PlayerCreate, db: Session = Depends(get_db)):
    new_player = Player(**player.dict())
    db.add(new_player)
    db.commit()
    db.refresh(new_player)
    return new_player

@router.get("/{player_id}", response_model=Player)
def get_player(player_id: int, db: Session = Depends(get_db)):
    player = db.query(Player).filter(Player.id == player_id).first()
    if not player:
        raise HTTPException(status_code=404, detail="Player not found")
    return player
