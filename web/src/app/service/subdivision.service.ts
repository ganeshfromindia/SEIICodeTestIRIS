import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {

  public baseURL: string = "http://localhost:3000/v1/";
  public errorCaught: any

  constructor(private http: HttpClient) { }

  
  getSubdivisions(): Observable<any> {
    return this.http.get<any[]>(this.baseURL + 'subdivisions')
      .pipe(
        catchError((err: any) => {
          console.log('error caught in service')
          console.error(err);
          
          throwError(() => {
            this.errorCaught = new Error(err);
            
          })
          return this.errorCaught
        })
      )
  }
}
