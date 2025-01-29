from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api_v1.api import api_v1_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    pass


@app.on_event("shutdown")
async def shutdown_event():
    pass


app.include_router(
    api_v1_router,
    prefix="/api/v1"
)

