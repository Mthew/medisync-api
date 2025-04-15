import { Injectable } from '@nestjs/common';
import { IPatientRepository } from '../../domain/repositories/patient.repository.interface';
import { CreatePatientDto } from '../dtos/create-patient.dto';
import { PatientMapper } from '../mappers/patient.mapper';
import { Patient } from '../../domain/entities/patient.entity';

@Injectable()
export class CreatePatientUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(dto: CreatePatientDto): Promise<Patient> {
    const patient = PatientMapper.toEntity(dto);
    return this.patientRepository.create(patient);
  }
}
