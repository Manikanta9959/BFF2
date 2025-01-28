from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db import get_db
from models import Team
from schemas import Team, TeamCreate

router = APIRouter(
    prefix="/teams",
    tags=["teams"]
)

@router.get("/", response_model=List[Team])
def get_teams(db: Session = Depends(get_db)):
    return db.query(Team).all()

@router.post("/", response_model=Team)
def create_team(team: TeamCreate, db: Session = Depends(get_db)):
    new_team = Team(**team.dict())
    db.add(new_team)
    db.commit()
    db.refresh(new_team)
    return new_team

@router.get("/{team_id}", response_model=Team)
def get_team(team_id: int, db: Session = Depends(get_db)):
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    return team
