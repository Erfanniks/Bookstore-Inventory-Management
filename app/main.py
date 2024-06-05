from fastapi import FastAPI
from app import models
from app.database import engine
from app.routers import book

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(book.router)
