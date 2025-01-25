export class AppointmentConfirmedEvent {
    constructor(
        private appointmentId: string,
        private slotId: string,
        private patientId: string,
        private patientName: string,
        private doctorId: string,
        private doctorName: string,
        private reservedAt: Date
    ) {
    }
}