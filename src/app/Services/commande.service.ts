
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { commande } from '../commande';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  endPoint = 'http://localhost:8083/api/command';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAll(): Observable<commande> {
    return this.httpClient
      .get<commande>(this.endPoint)
      .pipe(retry(1), catchError(this.httpError));
  }



  getCategory(id: any): Observable<commande> {
    return this.httpClient
      .get<commande>(this.endPoint + '/' + id)
      .pipe(retry(1), catchError(this.httpError));
  }


  delete(id: string) {
    return this.httpClient
      .delete<commande>(this.endPoint +"/"+ id, this.httpHeader)
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
