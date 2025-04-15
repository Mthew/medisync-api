import { Module } from '@nestjs/common';
import { PatientController } from './controllers/patient.controller';
import { ErrorHandlerMiddleware } from './middlewares/error-handler.middleware';
import { LoggerService } from '../infrastructure/services/logger.service';
import { CreatePatientUseCase } from '../application/use-cases/create-patient.use-case';
import { GetPatientUseCase } from '../application/use-cases/get-patient.use-case';
import { ListPatientsUseCase } from '../application/use-cases/list-patients.use-case';
import { UpdatePatientUseCase } from '../application/use-cases/update-patient.use-case';
import { DatabaseModule } from '../infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientController],
  providers: [
    LoggerService,
    ErrorHandlerMiddleware,
    CreatePatientUseCase,
    GetPatientUseCase,
    ListPatientsUseCase,
    UpdatePatientUseCase,
  ],
})
export class PresentationModule {}
