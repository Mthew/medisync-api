# Patient Registry API

## Overview

A comprehensive REST API for patient registration built with NestJS, following clean architecture principles and containerized deployment. The system is designed to be modular, scalable, and deployment-friendly.

## Architecture

### 🏗️ Clean Architecture Implementation

The project follows a hexagonal (ports and adapters) architecture with distinct layers:

- **Domain Layer**: Core business logic and entities
- **Application Layer**: Use cases and business rules
- **Infrastructure Layer**: External services and implementations
- **Presentation Layer**: API controllers and DTOs

## Project Structure

src/
├── domain/
│ ├── entities/
│ │ └── patient.entity.ts
│ ├── repositories/
│ │ └── patient.repository.interface.ts
│ └── value-objects/
│ └── medical-history.vo.ts
├── application/
│ ├── dtos/
│ │ ├── create-patient.dto.ts
│ │ └── update-patient.dto.ts
│ ├── use-cases/
│ │ ├── create-patient.use-case.ts
│ │ ├── get-patient.use-case.ts
│ │ ├── list-patients.use-case.ts
│ │ └── update-patient.use-case.ts
│ └── mappers/
│ └── patient.mapper.ts
├── infrastructure/
│ ├── database/
│ │ ├── repositories/
│ │ │ └── patient.repository.ts
│ │ └── migrations/
│ ├── config/
│ │ └── database.config.ts
│ └── services/
│ └── logger.service.ts
├── presentation/
│ ├── controllers/
│ │ └── patient.controller.ts
│ ├── middlewares/
│ │ └── error-handler.middleware.ts
│ └── validators/
│ └── patient.validator.ts
└── main.ts

## Features

CRUD Patient REST API

### Patient Management

Complete CRUD operations for patient records with the following attributes:

| Field           | Type     | Description                      |
| --------------- | -------- | -------------------------------- |
| id              | UUID     | Unique identifier                |
| first_name      | string   | Patient's first name             |
| last_name       | string   | Patient's last name              |
| birth_date      | date     | Patient's date of birth          |
| medical_history | string[] | Array of medical history entries |

## Technical Stack

**Backend**: NestJS
**Auth**: JWT
**AI Processing**: DeepSeek

### Core Technologies

- **Framework**: NestJS
- **Architecture**: Clean/Hexagonal Architecture
- **Documentation**: Swagger/OpenAPI
- **Validation**: class-validator
- **Containerization**: Docker
- **Database**: PostgreSQL
- **ORM**: TypeORM

### Key Features

- ✅ Modular project structure
- ✅ Repository pattern implementation
- ✅ Comprehensive input validation
- ✅ Consistent error handling
- ✅ API documentation with Swagger
- ✅ Clean architecture principles
- ✅ Database migrations support
- ✅ Efficient indexing strategy

## Getting Started

[Documentation for setup and installation will be added here]

## API Documentation

[Swagger documentation will be available at `/api` endpoint]

## Development Guidelines

[Development and contribution guidelines will be added here]

## Database Schema

### Patients Table

```sql
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medical_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    entry TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_patient FOREIGN KEY (patient_id) REFERENCES patients(id)
);

-- Indexes
CREATE INDEX idx_patients_name ON patients(first_name, last_name);
CREATE INDEX idx_medical_history_patient ON medical_history(patient_id);
```
