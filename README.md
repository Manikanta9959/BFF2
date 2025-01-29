# BFF2
# Docker Setup for Fullstack App

This project uses Docker Compose to run a fullstack application consisting of three services:
- **Backend** (Python FastAPI)
- **Frontend** (React + js)
- **Database** (MySQL)

## Prerequisites

Ensure that you have the following installed on your machine:
- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)


### Notes:
1. This `README.md` now includes everything in a single document for easier setup.


## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manikanta9959/BFF2.git
   cd BFF2
   ```
Start the containers: From the root of your project, run the following command to start all services (Backend, Frontend, and Database):
```bash 
   docker compose up -d --build
```
This command will:
Build the Docker images for both the backend and frontend from the respective Dockerfiles.
For mysql assuming dummy tables and data initializing it using  init.sql file.

To run specific service
```bash 
   docker compose up -d --build backend
   docker compose up -d --build app
   docker compose up -d --build db
```

2. **Access the services**:
Frontend: Visit http://localhost:3000 in your browser.
Backend: Access the API at http://localhost:8000.
For API Swagger docs : http://localhost:8000/docs
Database: The MySQL database is available at localhost:3307.

Stop the containers: To stop the services, press Ctrl+C or run the following in your terminal:
```bash 
   docker compose down
```

View Logs (optional): To see logs from any container, you can use:
```bash 
   docker compose logs container_backend
   docker compose logs container_app
   docker compose logs container_db
```


