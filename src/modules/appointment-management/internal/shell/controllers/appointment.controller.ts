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

    public static cancelAppointment(req: Request, res: Response) {
        const id = req.params.id;
        appointmentGateway.cancelAppointment(id);
        res.json(new VoisResponse("success", {}));
    }

    public static completeAppointment(req: Request, res: Response) {
        const id = req.params.id;
        appointmentGateway.completeAppointment(id);
        res.json(new VoisResponse("success", {}));
    }
}