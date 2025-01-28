"""
This module contains all functions which are concerned with connecting to SQL Db
"""
from typing import Any
from decouple import config
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# engine = create_engine(
#     config("SQLALCHEMY_DATABASE_URL"), pool_recycle=3600, pool_size=config("DB_POOLSIZE"), max_overflow=config("DB_MAXOVERFLOW")
# )
engine = create_engine(
    "mysql+pymysql://root:password@db:3306/files_db", pool_recycle=3600, pool_size=5, max_overflow=5
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency
class GetSQLDB:

    def __init__(self):
        # Initialize flags
        self._db = None
       
    def __call__(self):
        """
        Connects to the DB and yields the appropriate session(s).
        """
        try:
            self._db = SessionLocal()
            yield self._db
        finally:
            self._db.close()