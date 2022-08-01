import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './employee.model';

const baseUrl = environment.url + "/employee";
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
    
  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl + '/all')
    .pipe(
      catchError(err => throwError(err))
    );
  }

  add(employee: Employee) {
    return this.http.post<Employee>(baseUrl + '/add', employee)
    .pipe(
      catchError(err => throwError(err))
    );
  }

}