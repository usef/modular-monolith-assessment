import Slot from "../models/slotModel";
import createSlotDTO from "../dtos/createSlotDTO";
import {v4 as uuid4} from "uuid";
import constants from "../../../constants/constants";

class SlotRepository {
  private slots: Slot[] = [];

  public getAll() {
    return this.slots;
  }

  public add(slot: createSlotDTO) {
    const newSlot = new Slot(
        uuid4(),
        slot.time,
        constants.doctorId,
        constants.doctorName,
        false,
        slot.cost
    );
    this.slots.push(newSlot);
    return newSlot
  }

  public findById(id: string): Slot {
    return this.slots.filter((slot) => slot.id === id)[0];
  }
}

const slotRepository = new SlotRepository();
export default slotRepository;
