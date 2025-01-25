export default class Slot {
    constructor(
        public id: string,
        // TODO: Fix this time
        public time: Date,
        public doctorId: string,
        public doctorName: string,
        public isReserved: boolean,
        public cost: number
    ) {
    }
}
