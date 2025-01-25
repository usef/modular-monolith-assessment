import {Request, Response} from "express";
import {IAppointmentGateway} from "../../../gateways/appointment-gateway.interface";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import {VoisResponse} from "../../../../../shared/middlewares/response";

const appointmentGateway: IAppointmentGateway = dependencyContainer.getDependency("AppointmentGateway");

export class AppointmentController {
    public static getUpcomingAppointments(req: Request, res: Response) {
        const upcomingAppointments = appointmentGateway.getUpcomingAppointments();
        res.json(new VoisResponse("success", upcomingAppointments));
    }
}