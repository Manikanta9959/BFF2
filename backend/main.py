import time
from fastapi import FastAPI, Request, Response, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4
# from core.settings import settings, app_logger, get_service_details
from api_v1.api import api_v1_router
# from db.read


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    # redis = await connect_to_redisdb()
    pass



@app.on_event("shutdown")
async def shutdown_event():
    """
    This function is empty because it serves as a placeholder for future implementation.
    The purpose of this function is to handle shutdown events or cleanup tasks when the application is being shut down.
    Depending on the specific requirements of the application, the implementation for this function may vary.
    For now, it remains empty, awaiting future development.
    """
    pass


app.include_router(
    api_v1_router,
    prefix="/api/v1",
)
