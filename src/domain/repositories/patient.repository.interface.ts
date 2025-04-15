import { Patient } from '../entities/patient.entity';

export interface IPatientRepository {
  create(patient: Patient): Promise<Patient>;
  findById(id: string): Promise<Patient>;
  findAll(): Promise<Patient[]>;
  update(id: string, patient: Partial<Patient>): Promise<Patient>;
  delete(id: string): Promise<void>;
}
