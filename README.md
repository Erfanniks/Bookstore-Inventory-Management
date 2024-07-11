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
- Docker
- Kubernetes
- Terraform
- Helm

## Local Setup
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
1. Ensure you have `kubectl` and a Kubernetes cluster running.

2. If using `kind` for a local cluster:
    ```bash
    kind create cluster
    ```

3. Apply the Kubernetes manifests (for manual setup):
    ```bash
    kubectl apply -f k8s/configmap.yaml
    kubectl apply -f k8s/secret.yaml
    kubectl apply -f k8s/deployment.yaml
    kubectl apply -f k8s/service.yaml
    ```

4. Use port forwarding to access the service:
    ```bash
    kubectl port-forward svc/bookstore-service 8000:8000
    ```

## Helm Setup
1. Ensure Helm is installed:
    ```bash
    brew install helm
    ```

2. Navigate to the Helm chart directory:
    ```bash
    cd bookstore
    ```

3. Deploy the Helm chart:
    ```bash
    helm install bookstore-release .
    ```

4. If updating an existing release:
    ```bash
    helm upgrade bookstore-release .
    ```

5. Use port forwarding to access the service:
    ```bash
    kubectl port-forward svc/bookstore-release 8000:8000
    ```

## GCP and Terraform Setup
1. Ensure you have `gcloud` and `terraform` installed.

2. Initialize Terraform and apply the configuration to create a GKE cluster:
    ```bash
    terraform init
    terraform apply
    ```

3. Configure `kubectl` to use the new GKE cluster:
    ```bash
    gcloud container clusters get-credentials bookstore-cluster --region us-central1-a --project your-gcp-project-id
    ```

4. Deploy the application using Helm as described above.

## Usage
- Access the application at `http://localhost:8000` when using port forwarding.
- For GKE, access the application using the external IP of the service if configured.

## Monitoring and Logging
- Set up monitoring and logging using tools like Prometheus, Grafana, and Google Cloud Monitoring.

## Optimization and Scaling
- Fine-tune Kubernetes resources.
- Implement autoscaling based on load.

## Documentation and Maintenance
- Document setup, usage, and maintenance procedures.
- Regularly update dependencies, Docker images, and Kubernetes manifests.
- Perform regular backups of critical data.
Testing GitHub Actions
