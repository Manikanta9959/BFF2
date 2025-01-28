from fastapi import APIRouter

from api_v1.endpoints.test import router as test_router


api_v1_router = APIRouter()
api_v1_router.include_router(test_router, tags=["Test"], prefix="")
