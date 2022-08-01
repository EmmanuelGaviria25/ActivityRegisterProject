import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.model';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from '../employee/employee.service';
import { Employee } from '../employee/employee.model';
import { NotificationService } from '../notifications/notification.service';
import { NotificationType } from '../notifications/notification-type.enum';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  closeResult = '';

  activity: Activity = new Activity;

  activities: Activity[];
  employees: Employee[];
  statuses: String[];
  modalReference: NgbModalRef;

  constructor(private activitiesService: ActivitiesService,
    private notificationService: NotificationService,
    private employeesService: EmployeesService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getAll();
    this.getStatuses();
    this.getEmployees();
  }

  getAll() {
    this.activitiesService.getAll()
      .subscribe((response) => {
        this.activities = response;
      });
  }

  getStatuses() {
    this.activitiesService.getStatuses()
      .subscribe((response) => {
        this.statuses = response;
      });
  }

  getEmployees() {
    this.employeesService.getAll()
      .subscribe((response) => {
        this.employees = response;
      });
  }

  onSubmit(activity) {
    if (activity.id == null) {
      this.activitiesService.add(activity)
        .subscribe(result => {
          this.getAll();
          this.modalReference.close();
          this.notificationService.showNotification(NotificationType.INFO, 'Activity saved!');
        }, err => {
          console.log(err);
          this.notificationService.showNotification(NotificationType.DANGER, 'Error: ' + err.error.details);
        });
    } else {
      this.activitiesService.edit(activity)
        .subscribe(result => {
          this.getAll();
          this.modalReference.close();
          this.notificationService.showNotification(NotificationType.INFO, 'Activity edited!');
        }, err => {
          this.notificationService.showNotification(NotificationType.DANGER, 'Error: ' + err.error.details);
        });
    }
  }

  edit(activity: Activity, employeeId, content) {
    this.open(content);
    this.activity = { ...activity, employeeId };
  }

  deleteById(id) {
    this.activitiesService.deleteById(id)
      .subscribe(result => {
        this.getAll();
        this.notificationService.showNotification(NotificationType.PRIMARY, 'Activity deleted!');
      }, err => {
        this.notificationService.showNotification(NotificationType.DANGER, 'Error: ' + err.error.details);
      });
  }

  open(content) {
    this.modalReference = this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
    this.modalReference.result.then(
      (result) => {
        this.activity = new Activity();
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.activity = new Activity();
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  close() {
    this.modalReference.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
