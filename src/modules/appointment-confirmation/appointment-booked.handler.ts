import {dependencyContainer} from "../../shared/dependencies/dependencyContainer";
import {INotificationSender} from "../../shared/interfaces/notification-sender.interface";
import {IEventHandler} from "../../shared/interfaces/event-handler.interface";

export class AppointmentBookedHandler implements IEventHandler {
    private notificationSender: INotificationSender = dependencyContainer.getDependency<INotificationSender>("NotificationSender");

    handle(data: any) {
        this.notificationSender.send(data);
    }
}
