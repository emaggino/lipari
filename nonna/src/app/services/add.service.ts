import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  creaRicetta(obj: any) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('accessToken') || '')
      })
    }
    return this.http.post(`http://localhost:8080/api/ricette/crea-ricetta${httpOptions}`, obj)
  }
}
