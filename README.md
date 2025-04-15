# Patient Registry API

A comprehensive REST API for patient registration built with NestJS, following clean architecture principles and containerized deployment.

## Features

- Complete CRUD operations for patient records
- Clean/Hexagonal Architecture implementation
- CQRS Implementation
- Error Filters Implementation
- JWT Authentication
- Swagger API documentation
- Docker containerization
- PostgreSQL database integration

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT
- **Documentation**: Swagger/OpenAPI
- **Containerization**: Docker & Docker Compose

## Prerequisites

- Node.js (v16 or later)
- Docker and Docker Compose
- Git

## Getting Started

### Option 1: Running with Docker (Recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/patiently-api.git
   cd patiently-api
   ```

2. Start the application using Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. The API will be available at `http://localhost:3000`
4. Swagger documentation will be available at `http://localhost:3000/api`

### Option 2: Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/patiently-api.git
   cd patiently-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```
   # Database Configuration
   DATABASE_URL=postgresql://postgres:hiiKt1TjQbNjYdfi@db.ceucpwwnixccyqqpgpza.supabase.co:5432/postgres
   DB_HOST=db.ceucpwwnixccyqqpgpza.supabase.co
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=hiiKt1TjQbNjYdfi
   DB_NAME=patient_management

   #migrations
   TYPEORM_SYNCHRONIZE=false

   # Application Configuration
   PORT=3000
   NODE_ENV=development

   # JWT Configuration (for future auth implementation)
   JWT_SECRET=LUtFvBbMYwx0vXnf
   JWT_EXPIRATION=24h

   # Logging Configuration
   LOG_LEVEL=debug

   # Swagger Configuration
   SWAGGER_TITLE=Patient Management API
   SWAGGER_DESCRIPTION=API for managing patient records
   SWAGGER_VERSION=1.0
   SWAGGER_PATH=api

   # CORS Configuration
   CORS_ORIGIN=http://localhost:3000

   # Rate Limiting
   RATE_LIMIT_WINDOW=15
   RATE_LIMIT_MAX_REQUESTS=100

   # AI Assistance
   DEEP_SEEK_API_KEY=
   OPENAI_API_KEY=
   AI_SERVICE_PROVIDER=simulated
   ```

4. Start the application:

   ```bash
   npm run start:dev
   ```

5. The API will be available at `http://localhost:3000`
6. Swagger documentation will be available at `http://localhost:3000/api`

## API Endpoints

### Authentication

- `POST /auth/login` - Login with email and password

### Test credentials:

- Doctor:
  ```bash
  {
     "email": "doctor@example.com",
     "password": "password123"
  }
  ```
- Patient:
  ```bash
  {
     "email": "patient@example.com",
     "password": "password123"
  }
  ```

### Patients

- `GET /patients` - Get all patients
- `GET /patients/:id` - Get a patient by ID
- `POST /patients` - Create a new patient
- `PUT /patients/:id` - Update a patient
- `DELETE /patients/:id` - Delete a patient
- `POST /patients/:id/diagnosis` - Generate a diagnosis for a patient

## Project Structure

The project follows a clean/hexagonal architecture with the following structure:

```
src/
├── core/                  # Shared utilities and interfaces
├── modules/               # Feature modules
│   ├── patients/          # Patient module
│   │   ├── application/   # Use cases, DTOs, services
│   │   ├── domain/        # Entities, repository interfaces
│   │   ├── infrastructure/# Implementations (DB, external services)
│   │   └── presentation/  # Controllers
│   ├── user/              # User module
│   └── auth/              # Authentication module
└── main.ts                # Application entry point
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
