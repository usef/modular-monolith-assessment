import {INotificationSender} from "./interfaces/notification-sender.interface";

export class NotificationSender implements INotificationSender {
    send(data: any): void {
        console.log("Notification sent: ", data);
    }
}