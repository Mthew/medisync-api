import { IsString, IsDate, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '1990-01-01' })
  @IsDate()
  birthDate: Date;

  @ApiProperty({ example: ['Previous surgery in 2019'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  medicalHistory?: string[];
}
