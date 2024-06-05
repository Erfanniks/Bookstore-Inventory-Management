# Bookstore Inventory Management API

## Description
A FastAPI-based API for managing bookstore inventory.

## Features
- Add, update, remove books
- Search for books by various criteria

## Requirements
- Python 3.9+
- FastAPI
- SQLAlchemy
- Uvicorn

## Setup
1. Create a virtual environment:
    ```bash
    python -m venv env
    source env/bin/activate
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the application:
    ```bash
    uvicorn app.main:app --reload
    ```

## Docker Setup
1. Build the Docker image:
    ```bash
    docker build -t bookstore_inventory .
    ```

2. Run the Docker container:
    ```bash
    docker run -d -p 8000:8000 bookstore_inventory
    ```

## Usage
- Access the API documentation at `http://localhost:8000/docs`
