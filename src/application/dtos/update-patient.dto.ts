import { IsString, IsDate, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePatientDto {
  @ApiProperty({ example: 'John', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'Doe', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: '1990-01-01', required: false })
  @IsDate()
  @IsOptional()
  birthDate?: Date;

  @ApiProperty({ example: ['Previous surgery in 2019'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  medicalHistory?: string[];
}
