export class MedicalHistoryEntry {
  constructor(
    public readonly entry: string,
    public readonly createdAt: Date = new Date(),
  ) {}

  static create(entry: string): MedicalHistoryEntry {
    if (!entry || entry.trim().length === 0) {
      throw new Error('Medical history entry cannot be empty');
    }
    return new MedicalHistoryEntry(entry.trim());
  }
}
