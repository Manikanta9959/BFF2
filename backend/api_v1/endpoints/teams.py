from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db.session import GetSQLDB
from models.football import Team
from schemas.football import TeamSchema

router = APIRouter()

@router.get("/", response_model=List[TeamSchema])
def get_teams(db: Session = Depends(GetSQLDB())):
    return db.query(Team).all()

@router.post("/", response_model=TeamSchema)
def create_team(team: TeamSchema, db: Session = Depends(GetSQLDB())):
    new_team = Team(**team.dict())
    db.add(new_team)
    db.commit()
    db.refresh(new_team)
    return new_team

@router.get("/{team_id}", response_model=TeamSchema)
def get_team(team_id: int, db: Session = Depends(GetSQLDB())):
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    return team
