import ViewSlotsUseCase from "../../application/use-cases/view-slots";
import { Request, Response } from "express";

export class BookingController {
  constructor(private viewSlots: ViewSlotsUseCase) {}

  viewAvailableSlots(req: Request, res: Response) {
    const availableSlots = this.viewSlots.execute();

    res.json({ message: "success", data: availableSlots });
  }
}
