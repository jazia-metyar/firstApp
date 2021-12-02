import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categorie } from '../Categorie';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {
  endPoint = 'http://localhost:8083/api/categoryy';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCategories(): Observable<Categorie> {
    return this.httpClient
      .get<Categorie>(this.endPoint)
      .pipe(retry(1), catchError(this.httpError));
  }



  getCategory(id: any): Observable<Categorie> {
    return this.httpClient
      .get<Categorie>(this.endPoint + '/' + id)
      .pipe(retry(1), catchError(this.httpError));
  }

  create(category: Categorie): Observable<Categorie> {
    return this.httpClient
      .post<Categorie>(
        this.endPoint ,
        category)
  }

  update(id: string, data: any): Observable<Categorie> {
    return this.httpClient
      .put<Categorie>(
        this.endPoint + '/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  delete(id: string) {
    return this.httpClient
      .delete<Categorie>(this.endPoint +"/"+ id, this.httpHeader)
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
