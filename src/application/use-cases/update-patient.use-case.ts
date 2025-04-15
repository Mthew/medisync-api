import { Injectable, NotFoundException } from '@nestjs/common';
import { IPatientRepository } from '../../domain/repositories/patient.repository.interface';
import { UpdatePatientDto } from '../dtos/update-patient.dto';
import { PatientMapper } from '../mappers/patient.mapper';
import { Patient } from '../../domain/entities/patient.entity';

@Injectable()
export class UpdatePatientUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(id: string, dto: UpdatePatientDto): Promise<Patient> {
    const exists = await this.patientRepository.findById(id);
    if (!exists) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }

    const updateData = PatientMapper.toUpdateEntity(id, dto);
    return this.patientRepository.update(id, updateData);
  }
}
