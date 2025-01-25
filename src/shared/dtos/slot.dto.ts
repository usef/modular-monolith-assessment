export default interface SlotDto {
    id: string;
    // TODO: fix this time
    time: Date;
    doctorId: string;
    doctorName: string;
    isReserved: boolean;
    cost: number;
}
