import Slot from "../models/slot.model";
import createSlotDTO from "../dtos/createSlotDTO";
import {v4 as uuid4} from "uuid";
import constants from "../../../../shared/constants/constants";
import SlotDto from "../../../../shared/dtos/slot.dto";

class SlotRepository {
    private slots: Slot[] = [];

    public getAll(): SlotDto[] {
        return this.slots;
    }

    public add(slot: createSlotDTO): SlotDto {
        const newSlot = new Slot(
            uuid4(),
            slot.time,
            constants.doctorId,
            constants.doctorName,
            false,
            slot.cost
        );
        this.slots.push(newSlot);
        return newSlot as SlotDto;
    }

    public update(slot: SlotDto): void {
        this.slots = this.slots.map(s => s.id == slot.id ? slot : s);
    }

    public findById(id: string): SlotDto {
        return this.slots.filter((slot) => slot.id === id)[0];
    }
}

export default SlotRepository;
