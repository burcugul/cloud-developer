export const config = {
  "dev": {
    "username": "postgres",
    "password": "Por0takal.",
    "database": "postgres",
    "host": "udagramdev.c0bkoicxyef4.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-burcu-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    secret: "Hello world"
  }
}