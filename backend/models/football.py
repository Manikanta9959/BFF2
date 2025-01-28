import uuid
from datetime import datetime, timedelta
from re import T

from db.session import Base
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy_utils.types.uuid import UUIDType
from sqlalchemy.orm import relationship


class Area(Base):
    __tablename__ = "areas"
    id = Column(Integer, primary_key=True, index=True)
    city = Column(String(50))
    country = Column(String(50))


class Team(Base):
    __tablename__ = "teams"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    home_city = Column(String(50))
    area_id = Column(Integer, ForeignKey("areas.id"))
    players = relationship("Player", back_populates="team")


class Player(Base):
    __tablename__ = "players"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    position = Column(String(50))
    nationality = Column(String(50))
    team_id = Column(Integer, ForeignKey("teams.id"))
    team = relationship("Team", back_populates="players")


class Match(Base):
    __tablename__ = "matches"
    id = Column(Integer, primary_key=True, index=True)
    home_team_id = Column(Integer, ForeignKey("teams.id"))
    away_team_id = Column(Integer, ForeignKey("teams.id"))
    competition = Column(String(50))
    date = Column(DateTime)
    area_id = Column(Integer, ForeignKey("areas.id"))
    home_team = relationship("Team", foreign_keys=[home_team_id])
    away_team = relationship("Team", foreign_keys=[away_team_id])
