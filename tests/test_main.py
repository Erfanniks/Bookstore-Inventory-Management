from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_book():
    response = client.post("/books/", json={"title": "Book Title", "author": "Author Name", "price": 19.99, "stock": 100})
    assert response.status_code == 200
    assert response.json()["title"] == "Book Title"

def test_read_books():
    response = client.get("/books/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
