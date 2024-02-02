import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private http : HttpClient) { }

  editRicetta(obj: any, id: any): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    }
    return this.http.put(
      `http://localhost:8080/api/ricette/update/${id}`,
      obj,
      httpOptions
    );
  }
}
