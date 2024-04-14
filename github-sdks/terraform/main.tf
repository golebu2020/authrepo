terraform {
  required_providers {
    github = {
      source = "integrations/github"
      version = "6.2.1"
    }
  }
}

provider "github" {
  # Configuration options
}

resource "github_branch" "sdks" {
  repository     = "authrepo"
  branch         = "sdks"
  source_branch  = "master"
}