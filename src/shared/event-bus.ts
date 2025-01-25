import EventEmitter from "node:events";
import {dependencyContainer} from "./dependencies/dependencyContainer";
import {IEventHandler} from "./interfaces/event-handler.interface";

export class EventBus {
    private eventEmitter = dependencyContainer.getDependency<EventEmitter>("EventEmitter");
    private appointmentBookedHandler = dependencyContainer.getDependency<IEventHandler>("AppointmentBookedHandler");

    constructor() {
        this.eventEmitter.on("AppointmentConfirmed", (data) => this.appointmentBookedHandler.handle(data));
    }
}