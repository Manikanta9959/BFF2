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

app.include_router(
    api_v1_router,
    prefix="/api/v1",
)

@app.on_event("startup")
async def startup_event():
    # redis = await connect_to_redisdb()
    pass



@app.on_event("shutdown")
async def shutdown_event():
    pass



