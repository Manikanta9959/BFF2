from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload
from typing import List

from db.session import GetSQLDB
from models.football import Area, Team
from schemas.football import AreaTeamSchema

router = APIRouter()

@router.get("/", response_model=List[AreaTeamSchema])
def get_areas(db: Session = Depends(GetSQLDB())):
    areas_with_teams = (
        db.query(Area, Team)
        .join(Team, Team.home_city == Area.city)
        .all()
    )

    areas_dict = {}
    for area, team in areas_with_teams:
        if area.id not in areas_dict:
            areas_dict[area.id] = {
                "id": area.id,
                "city": area.city,
                "country": area.country,
                "teams_list": [team.name]
            }
        
        else:
            areas_dict[area.id]["teams_list"].append(team.name)

    return [
        AreaTeamSchema(
            id=area["id"],
            city=area["city"],
            country=area["country"],
            teams_list=area["teams_list"]
        )
        for area in areas_dict.values()
    ]

# @router.post("/", response_model=AreaSchema)
# def create_area(area: AreaSchema, db: Session = Depends(GetSQLDB())):
#     new_area = Area(**area.dict())
#     db.add(new_area)
#     db.commit()
#     db.refresh(new_area)
#     return new_area
