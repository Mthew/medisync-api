import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { PatientTypeormEntity } from './entities/patient.entity';
import { PatientRepository } from './repositories/patient.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([PatientTypeormEntity]),
  ],
  providers: [
    {
      provide: 'IPatientRepository',
      useClass: PatientRepository,
    },
  ],
  exports: ['IPatientRepository'],
})
export class DatabaseModule {}
