export default class Appointment {
    constructor(
        private id: string,
        private slotId: string,
        private patientId: string,
        private patientName: string,
        // TODO: fix reservedAt to take time from => to
        private reservedAt: Date,
        // TODO: Add status of completed/canceled
    ) {
    }
}
