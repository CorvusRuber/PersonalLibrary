import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { API_URL } from "../../../environments/environment";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';
import { ICommonItem } from "../../models/common-item";
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

  get(endpoint: string, payload?: any) {
    return this.http.get(API_URL + endpoint).pipe(catchError(this.errorHandler)).toPromise();
  }

  post(endpoint: string, payload: any) {
    return this.http.post(API_URL + endpoint, payload, httpOptions).pipe(catchError(this.errorHandler)).toPromise();
  }

  put(endpoint: string, payload: any) {
    return this.http.put(API_URL + endpoint, payload, httpOptions).pipe(catchError(this.errorHandler)).toPromise();
  }

  delete(endpoint: string, payload?: any) {
    return this.http.delete(API_URL + endpoint, httpOptions).pipe(catchError(this.errorHandler)).toPromise();
  }

  errorHandler(error: HttpErrorResponse) {
    return new ErrorObservable("This is BAD !!!");
  }

  getNewItemPayload(method) {
    let payload: ICommonItem = {};
    payload.descrizione = "Inserisci la descrizione";
    switch (method) {
      case "books":
        payload.titolo = "Inserisci il titolo";
        payload.autore = "Inserisci l'autore";
        payload.anno = { value: null, text: "Inserisci l'anno di pubblicazione" };
        payload.editore = "Inserisci l'editore";
        payload.isbn = "Inserisci il numero ISBN";
        payload.img = "Scegli l'immagine di copertina";
        break;
      case "authors":
        payload.nome = "Inserisci il nome";
        payload.cognome = "Inserisci il cognome";
        payload.nato = { value: null, text: "Data di nascita" };
        payload.morto = { value: null, text: "Data di morte" };
        payload.img = null;
        break;
      case "publishers":
        payload.nome = "Inserisci il nome";
        break;
      case "genres":
        break;
      default:
        payload.titolo = "Inserisci il titolo";
        break;
    }
    return payload;
  }

}
