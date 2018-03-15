import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { API_URL } from "../../../environments/environment";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    console.log("Called endpoint " + endpoint);
    return this.http.get(API_URL + endpoint).pipe(catchError(this.errorHandler)).toPromise();
  }

  post(endpoint: string, payload: any) {
    return this.http.post(endpoint, payload, httpOptions).pipe(catchError(this.errorHandler)).toPromise();
  }

  errorHandler(error: HttpErrorResponse) {
    return new ErrorObservable("This is BAD !!!");
  }

}
