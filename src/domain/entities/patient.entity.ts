export class Patient {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
  medicalHistory: string[];

  constructor(params: {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    medicalHistory?: string[];
  }) {
    this.id = params.id || '';
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.birthDate = params.birthDate;
    this.medicalHistory = params.medicalHistory || [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
