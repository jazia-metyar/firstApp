  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { retry, catchError } from 'rxjs/operators';
  import { ProductCls } from '../ProductCls';
  
  @Injectable({
    providedIn: 'root'
  })
  
  export class ProductServiceService {
    endPoint = 'http://localhost:8083/api/product';
  
    constructor(private httpClient: HttpClient) {}
  
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    getProducts(): Observable<ProductCls> {
      return this.httpClient
        .get<ProductCls>(this.endPoint)
        .pipe(retry(1), catchError(this.httpError));
    }
  
  
  
    getProduct(id: any): Observable<ProductCls> {
      return this.httpClient
        .get<ProductCls>(this.endPoint + '/'+ id)
        .pipe(retry(1), catchError(this.httpError));
    }

    getProductsByCatg(id: any): Observable<ProductCls> {
      return this.httpClient
        .get<ProductCls>(this.endPoint + '/prod/'+ id)
        .pipe(retry(1), catchError(this.httpError));
    }
  
    create(product:any): Observable<any> {
      return this.httpClient
        .post<any>(
          this.endPoint ,
          product,
          this.httpHeader
        )
        .pipe(retry(1), catchError(this.httpError));
    }
  
    update(id: string, data: any): Observable<ProductCls> {
      return this.httpClient
        .put<ProductCls>(
          this.endPoint + '/' + id,
          JSON.stringify(data),
          this.httpHeader
        )
        .pipe(retry(1), catchError(this.httpError));
    }
  
    delete(id: string) {
      return this.httpClient
        .delete<ProductCls>(this.endPoint +"/"+ id, this.httpHeader)
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
  