import { Employee } from "../employee/employee.model";

export class Activity {
    id: number;
    title: String;
    description: String;
    dateTimeExecution: String;
    daysLate: String;
    employee: Employee;
    employeeId: Number;
    status: String;
}