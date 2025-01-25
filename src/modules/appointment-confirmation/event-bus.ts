import EventEmitter from "node:events";
import {AppointmentBookedHandler} from "./appointment-booked.handler";
import {dependencyContainer} from "../../shared/dependencies/dependencyContainer";

export class EventBus {
    constructor() {
        const eventBus = dependencyContainer.getDependency<EventEmitter>("EventEmitter");
        eventBus.on("AppointmentConfirmed", (data) => {
            (new AppointmentBookedHandler()).handle(data);
        });
    }
}