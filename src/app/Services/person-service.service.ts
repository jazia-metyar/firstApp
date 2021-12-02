import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { person } from '../person';

@Injectable({
  providedIn: 'root'
})

export class PersonServiceService {
  endPoint = 'http://localhost:8083/person';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPersons(): Observable<person> {
    return this.httpClient
      .get<person>(this.endPoint+'/getAll')
      .pipe(retry(1), catchError(this.httpError));
  }



  getPerson(id: any): Observable<person> {
    return this.httpClient
      .get<person>(this.endPoint + '/getById/'+ id)
      .pipe(retry(1), catchError(this.httpError));
  }
/*
  getProductsByCatg(id: any): Observable<ProductCls> {
    return this.httpClient
      .get<ProductCls>(this.endPoint + '/prod/'+ id)
      .pipe(retry(1), catchError(this.httpError));
  }
  */

  create(person:any): Observable<any> {
    return this.httpClient
      .post<any>(
        this.endPoint+'/post' ,
        person,
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  update(id: string, data: any): Observable<person> {
    return this.httpClient
      .put<person>(
        this.endPoint + '/put/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  delete(id: string) {
    return this.httpClient
      .delete<person>(this.endPoint +"/delete/"+ id, this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }


  httpError(error: { error: { message: string }; status: any; message: any }) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
