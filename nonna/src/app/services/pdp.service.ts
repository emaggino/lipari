import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdpService {

  constructor(private http : HttpClient) { }

  getById(id : string){
    return this.http.get(`http://localhost:8080/api/ricette/get/${id}`)
  }
}
