import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Book } from './book';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api:string = 'http://localhost:3000/api';
  httpHeaders:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient:HttpClient) { }

  addBook(data:Book):Observable<any> {
    let url=`${this.api}/addBook`;
    return this.httpClient.post(url, data);
  }

  getBooks(){
    return this.httpClient.get(`${this.api}`);
  }

  getBookById(id:any):Observable<any>{
    let url=`${this.api}/readBook/${id}`;
    return this.httpClient.get(url).pipe(map((res:any)=>{
      return res || {}
    }));
  }

  updateBook(id:any,data:any):Observable<any> {
    let url=`${this.api}/updateBook/${id}`;
    return this.httpClient.put(url,data);
  }
}


