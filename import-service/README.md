# Import Service
Backend microservice to upload files to S3 bucket.

## Endpoints:
  - GET - https://646uitgn7f.execute-api.us-east-1.amazonaws.com/import


## Available routes

### GET
- [x] `/import?name=yourfile.csv` - Generates PreSigned url to upload files to S3.
