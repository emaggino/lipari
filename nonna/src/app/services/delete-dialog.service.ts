import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private http: HttpClient) { }

  deleteRicetta(id: any){
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    }
    return this.http.delete(`http://localhost:8080/api/ricette/delete/` + id , httpOptions)
  }
}
