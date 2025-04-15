import { Patient } from '../../../domain/entities/patient.entity';
import { PatientTypeormEntity } from '../entities/patient.entity';

export class PatientPersistenceMapper {
  static toDomain(ormEntity: PatientTypeormEntity): Patient {
    return new Patient({
      id: ormEntity.id,
      firstName: ormEntity.firstName,
      lastName: ormEntity.lastName,
      birthDate: ormEntity.birthDate,
      medicalHistory: ormEntity.medicalHistory,
    });
  }

  static toPersistence(domainEntity: Patient): PatientTypeormEntity {
    const ormEntity = new PatientTypeormEntity();
    ormEntity.id = domainEntity.id;
    ormEntity.firstName = domainEntity.firstName;
    ormEntity.lastName = domainEntity.lastName;
    ormEntity.birthDate = domainEntity.birthDate;
    ormEntity.medicalHistory = domainEntity.medicalHistory;
    return ormEntity;
  }
}
