export default class Appointment {
    constructor(
        private _id: string,
        private _slotId: string,
        private _patientId: string,
        private _patientName: string,
        // TODO: fix reservedAt to take time from => to
        private _reservedAt: Date,
        // TODO: Add status of completed/canceled
    ) {
    }
    
    get id(): string {
        return this._id;
    }

    get slotId(): string {
        return this._slotId;
    }

    get patientId(): string {
        return this._patientId;
    }

    get patientName(): string {
        return this._patientName;
    }

    get reservedAt(): Date {
        return this._reservedAt;
    }
}
