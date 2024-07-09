provider "google" {
  credentials = file("/Users/erfanniketeghad/Desktop/Bookstore Inventory Management/terraform/bookstore-project-428112-4be30e84a4b4.json")
  project     = "bookstore-project-428112"
  region      = "us-central1"
}
