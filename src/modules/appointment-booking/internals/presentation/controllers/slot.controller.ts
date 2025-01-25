import {Request, Response} from "express";
import {ListAvailableSlotsUseCase} from "../../application/use-cases/list-available-slots.usecase";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";

const listAvailableSlotsUseCase: ListAvailableSlotsUseCase = dependencyContainer.getDependency("ListAvailableSlotsUseCase");

export default class SlotController {
    public static getAvailableSlots(req: Request, res: Response) {
        const availableSlots = listAvailableSlotsUseCase.execute();
        res.json({"message": "Success", data: {availableSlots}});
    }
}
