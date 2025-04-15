import { Injectable, OnModuleInit, Inject } from '@nestjs/common';

import {
  IPatientRepository,
  PATIENT_REPOSITORY,
} from '../../modules/patients/domain/interfaces/patient.repository.interface';
import { Patient } from '../../modules/patients/domain/entities/patient.entity';
import {
  IUserRepository,
  USER_REPOSITORY,
} from 'src/modules/user/domain/interfaces/user.repository.interface';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { Role } from 'src/modules/user/domain/entities/role.enum';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: IPatientRepository,
  ) {}

  async onModuleInit() {
    console.log('Checking if seeding is needed...');

    // Check if users already exist to prevent re-seeding on every restart
    const existingDoctor =
      await this.userRepository.findByEmail('doctor@example.com');
    if (!existingDoctor) {
      console.log('Seeding initial doctor user...');
      const doctorUser = await User.create({
        email: 'doctor@example.com',
        plainPassword: 'password123',
        roles: [Role.Doctor],
      });
      await this.userRepository.save(doctorUser);
      console.log('Doctor user seeded.');
    } else {
      console.log('Doctor user already exists.');
    }

    const existingPatientUser = await this.userRepository.findByEmail(
      'patient@example.com',
    );
    if (!existingPatientUser) {
      console.log('Seeding initial patient user...');
      const patientUser = await User.create({
        email: 'patient@example.com',
        plainPassword: 'password123',
        roles: [Role.Patient],
      });
      await this.userRepository.save(patientUser);

      // Seed a related patient record (example)
      console.log('Seeding initial patient record...');
      const patientRecord = new Patient({
        firstName: 'Test',
        lastName: 'Patient',
        birthDate: '1995-01-20',
        medicalHistory: ['Initial checkup'],
      });
      // Link patient record to user if your design includes it (e.g., patientRecord.userId = patientUser.id)
      await this.patientRepository.save(patientRecord);
      console.log('Patient user and record seeded.');
    } else {
      console.log('Patient user already exists.');
    }
    console.log('Seeding check complete.');
  }
}
