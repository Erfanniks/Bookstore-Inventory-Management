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

## Kubernetes Setup
1. Ensure you have `kubectl` and a Kubernetes cluster running, e.g., using `kind`.

2. Apply the Kubernetes manifests:
    ```bash
    kubectl apply -f k8s/configmap.yaml
    kubectl apply -f k8s/secret.yaml
    kubectl apply -f k8s/deployment.yaml
    kubectl apply -f k8s/service.yaml
    ```

3. Use port forwarding to access the service:
    ```bash
    kubectl port-forward svc/bookstore-service 8000:8000
    ```

## Usage
- Access the application at `http://localhost:8000`
