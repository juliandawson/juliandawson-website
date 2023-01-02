terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "juliandawson"

    workspaces {
      name = "juliandawson-github-io"
    }
  }
}