import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPatientRepository } from '../../../domain/repositories/patient.repository.interface';
import { Patient } from '../../../domain/entities/patient.entity';
import { PatientTypeormEntity } from '../entities/patient.entity';
import { PatientPersistenceMapper } from '../mappers/patient-persistence.mapper';

@Injectable()
export class PatientRepository implements IPatientRepository {
  constructor(
    @InjectRepository(PatientTypeormEntity)
    private readonly repository: Repository<PatientTypeormEntity>,
  ) {}

  async create(patient: Patient): Promise<Patient> {
    const persistenceEntity = PatientPersistenceMapper.toPersistence(patient);
    const savedEntity = await this.repository.save(persistenceEntity);
    return PatientPersistenceMapper.toDomain(savedEntity);
  }

  async findById(id: string): Promise<Patient> {
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) return null;
    return PatientPersistenceMapper.toDomain(entity);
  }

  async findAll(): Promise<Patient[]> {
    const entities = await this.repository.find();
    return entities.map((entity) => PatientPersistenceMapper.toDomain(entity));
  }

  async update(id: string, patientData: Partial<Patient>): Promise<Patient> {
    await this.repository.update(id, patientData);
    const updatedEntity = await this.repository.findOne({ where: { id } });
    return PatientPersistenceMapper.toDomain(updatedEntity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
