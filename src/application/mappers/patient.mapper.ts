import { Patient } from '../../domain/entities/patient.entity';
import { CreatePatientDto } from '../dtos/create-patient.dto';
import { UpdatePatientDto } from '../dtos/update-patient.dto';

export class PatientMapper {
  static toEntity(dto: CreatePatientDto): Patient {
    return new Patient({
      firstName: dto.firstName,
      lastName: dto.lastName,
      birthDate: dto.birthDate,
      medicalHistory: dto.medicalHistory,
    });
  }

  static toUpdateEntity(id: string, dto: UpdatePatientDto): Partial<Patient> {
    return {
      id,
      ...dto,
    };
  }
}
