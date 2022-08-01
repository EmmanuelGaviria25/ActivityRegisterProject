import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from './activity.model';

const baseUrl = environment.url + "/activity";
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
    
  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(baseUrl + '/all')
    .pipe(
      catchError(err => throwError(err))
    );
  }

  getStatuses(): Observable<String[]> {
    return this.http.get<String[]>(baseUrl + '/statuses')
    .pipe(
      catchError(err => throwError(err))
    );
  }

  add(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(baseUrl + '/add', activity)
    .pipe(
      catchError(err => throwError(err))
    );
  }

  edit(activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(baseUrl + '/edit/' + activity.id, activity)
    .pipe(
      catchError(err => throwError(err))
    );
  }

  deleteById(id): Observable<any> {
    return this.http.delete<Activity>(baseUrl + '/delete/' + id)
    .pipe(
      catchError(err => throwError(err))
    );
  }

}