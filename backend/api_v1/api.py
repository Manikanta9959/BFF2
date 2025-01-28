from fastapi import APIRouter


from api_v1.endpoints.test import router as test_router
from api_v1.endpoints.areas import router as areas_router
from api_v1.endpoints.matches import router as matches_router
from api_v1.endpoints.teams import router as teams_router
from api_v1.endpoints.players import router as players_router


api_v1_router = APIRouter()
api_v1_router.include_router(test_router, tags=["Test"], prefix="")
api_v1_router.include_router(areas_router, tags=["Areas"], prefix="/areas")
api_v1_router.include_router(matches_router, tags=["Matches"], prefix="/matches")
api_v1_router.include_router(teams_router, tags=["Teams"], prefix="/teams")
api_v1_router.include_router(players_router, tags=["Players"], prefix="/players")
