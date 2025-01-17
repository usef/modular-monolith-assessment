import Slot from "../models/slotMode";

class SlotRepository {
  private slots: Slot[] = [];

  public getAll() {
    return this.slots;
  }

  public add(slot: Slot) {
    this.slots.push(slot);
  }

  public findById(id: string): Slot {
    return this.slots.filter((slot) => slot.id === id)[0];
  }
}

const slotRepository = new SlotRepository();
export default slotRepository;
