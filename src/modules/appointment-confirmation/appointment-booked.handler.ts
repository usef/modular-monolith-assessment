import {dependencyContainer} from "../../shared/dependencies/dependencyContainer";
import {INotificationSender} from "../../shared/interfaces/notification-sender.interface";

export class AppointmentBookedHandler {
    private notificationSender: INotificationSender = dependencyContainer.getDependency<INotificationSender>("NotificationSender");

    handle(data: any) {
        this.notificationSender.send(data);
    }
}
