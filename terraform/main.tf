resource "google_container_cluster" "primary" {
  name               = "bookstore-cluster"
  location           = "us-central1-a"
  initial_node_count = 1

  node_config {
    machine_type = "e2-micro"
    disk_size_gb = 10
  }

  master_auth {
    client_certificate_config {
      issue_client_certificate = true
    }
  }

  enable_shielded_nodes = false
  enable_tpu            = false

  deletion_protection  = false  # Ensure this is set to false
}

resource "google_container_node_pool" "primary_nodes" {
  cluster    = google_container_cluster.primary.name
  location   = google_container_cluster.primary.location
  node_count = 1

  node_config {
    preemptible  = true
    machine_type = "e2-micro"
    disk_size_gb = 10
  }

  autoscaling {
    min_node_count = 1
    max_node_count = 2
  }
}

output "kubernetes_cluster_name" {
  value = google_container_cluster.primary.name
}

output "region" {
  value = google_container_cluster.primary.location
}
