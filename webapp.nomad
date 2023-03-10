job "demo-webapp" {
  datacenters = ["dc1"]

  group "demo" {
    count = 1

    network {
      port "http" { }
    }

    service {
      name = "demo-webapp"
      port = "http"

      check {
        type     = "http"
        path     = "/"
        interval = "2s"
        timeout  = "2s"
      }
    }

    task "server" {
      env {
        PORT    = "${NOMAD_PORT_http}"
        NODE_IP = "${NOMAD_IP_http}"
      }

      driver = "docker"

      config {
        image = "mcas/apigouvfr:latest"
        ports = ["http"]
      }
    }
  }
}
