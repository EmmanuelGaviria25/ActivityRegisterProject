import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { NotificationType } from './notification-type.enum';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastr: ToastrService) {}

    showNotification(type: NotificationType, message: String) {

        this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span> ${message}.`, '', {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                toastClass: `alert alert-${type} alert-with-icon`,
                positionClass: 'toast-bottom-center'
            });
    }
}  
