from pydantic import BaseModel

class AreaSchema(BaseModel):
    id: int
    city: str
    country: str

    class Config:
        orm_mode = True


class TeamSchema(BaseModel):
    id: int
    name: str
    home_city: str
    area_id: int

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
    competition: str
    date: str
    area_id: int

    class Config:
        orm_mode = True