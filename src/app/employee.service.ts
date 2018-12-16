import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import {IEmployee} from './employee';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _URL = "../assets/employee.json";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee []>{
    return this.http.get<IEmployee []>(this._URL) 
                    .pipe(catchError(this._errorHandler));
  }
  _errorHandler(error : HttpErrorResponse){
    console.error(error);
    return throwError("Server Error");
  }
}
