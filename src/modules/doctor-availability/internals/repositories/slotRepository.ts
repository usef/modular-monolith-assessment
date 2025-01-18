import Slot from "../models/slotModel";
import createSlotDTO from "../dtos/createSlotDTO";
import { v4 as uuid4 } from "uuid";
import constants from "../../../../shared/constants/constants";
import SlotDTO from "../../../../shared/dtos/slotDTO";

class SlotRepository {
  private slots: Slot[] = [];

  public getAll(): SlotDTO[] {
    return this.slots;
  }

  public add(slot: createSlotDTO): SlotDTO {
    const newSlot = new Slot(
      uuid4(),
      slot.time,
      constants.doctorId,
      constants.doctorName,
      false,
      slot.cost
    );
    this.slots.push(newSlot);
    return newSlot as SlotDTO;
  }

  public findById(id: string): SlotDTO {
    return this.slots.filter((slot) => slot.id === id)[0];
  }
}

export default SlotRepository;
