import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  UseFilters,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePatientDto } from '../../application/dtos/create-patient.dto';
import { UpdatePatientDto } from '../../application/dtos/update-patient.dto';
import { CreatePatientUseCase } from '../../application/use-cases/create-patient.use-case';
import { GetPatientUseCase } from '../../application/use-cases/get-patient.use-case';
import { ListPatientsUseCase } from '../../application/use-cases/list-patients.use-case';
import { UpdatePatientUseCase } from '../../application/use-cases/update-patient.use-case';

@ApiTags('patients')
@Controller('patients')
export class PatientController {
  constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly getPatientUseCase: GetPatientUseCase,
    private readonly listPatientsUseCase: ListPatientsUseCase,
    private readonly updatePatientUseCase: UpdatePatientUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new patient' })
  @ApiResponse({ status: 201, description: 'Patient created successfully' })
  async createPatient(@Body() createPatientDto: CreatePatientDto) {
    return this.createPatientUseCase.execute(createPatientDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a patient by ID' })
  @ApiResponse({ status: 200, description: 'Patient found' })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  async getPatient(@Param('id') id: string) {
    return this.getPatientUseCase.execute(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all patients' })
  @ApiResponse({ status: 200, description: 'List of patients' })
  async getAllPatients() {
    return this.listPatientsUseCase.execute();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a patient' })
  @ApiResponse({ status: 200, description: 'Patient updated successfully' })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  async updatePatient(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.updatePatientUseCase.execute(id, updatePatientDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a patient' })
  @ApiResponse({ status: 204, description: 'Patient deleted successfully' })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  async deletePatient(@Param('id') id: string) {
    return this.getPatientUseCase.execute(id);
  }
}
