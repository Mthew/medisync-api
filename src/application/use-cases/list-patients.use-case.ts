import { Injectable } from '@nestjs/common';
import { IPatientRepository } from '../../domain/repositories/patient.repository.interface';
import { Patient } from '../../domain/entities/patient.entity';

@Injectable()
export class ListPatientsUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(): Promise<Patient[]> {
    return this.patientRepository.findAll();
  }
}
