export default class Appointment {
  constructor(
    private id: string,
    private slotId: string,
    private patientId: string,
    private patientName: string,
    private reservedAt: Date
  ) {}
}
