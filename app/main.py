from fastapi import FastAPI
from app import models
from app.database import engine
from app.routers import book

# Create all database tables
models.Base.metadata.create_all(bind=engine)

# Initialize the FastAPI application
app = FastAPI()

# Include the book router
app.include_router(book.router)
