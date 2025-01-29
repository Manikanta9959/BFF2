from pydantic import BaseModel
from typing import List

class AreaSchema(BaseModel):
    id: int
    city: str
    country: str

    class Config:
        orm_mode = True



class AreaTeamSchema(BaseModel):
    id: int
    city: str
    country: str
    teams_list : List[str]

    class Config:
        orm_mode = True


class TeamSchema(BaseModel):
    id: int
    name: str
    home_city: str
    area_id: int
    area_name: str
    players_list: List[str]

    class Config:
        orm_mode = True


class PlayerSchema(BaseModel):
    id: int
    name: str
    position: str
    nationality: str
    team_id: int

    class Config:
        orm_mode = True


class MatchSchema(BaseModel):
    id: int
    home_team_id: int
    away_team_id: int
    hometeam_name: str
    awayteam_name: str
    area_name: str
    competition: str
    date: str
    area_id: int

    class Config:
        orm_mode = True