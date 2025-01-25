import {Request, Response} from "express";
import SlotsService from "../services/slots.service";
import createSlotDTO from "../dtos/createSlotDTO";
import {validationResult} from "express-validator";
import {dependencyContainer} from "../../../../shared/dependencies/dependencyContainer";

const slotsService: SlotsService =
    dependencyContainer.getDependency("SlotsService");

export default class SlotsController {
    public static async listSlots(req: Request, res: Response) {
        const slots = slotsService.listAllSlots();
        res.json({message: "success", slots});
    }

    public static async addSlot(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            res.json({message: "failure"});
            return;
        }
        const slot: createSlotDTO = req.body;
        const createdSlot = slotsService.createSlot(slot);

        res.json({message: "success", slot: createdSlot});
    }
}
