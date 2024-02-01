import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {login} from '../interfaces/data'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false
  isAdmin: boolean = false
  isUser: boolean = false

  loginUrl = `http://localhost:8080/api/auth/signin`

  
  
  //loginTrack: Subject<boolean> = new Subject<boolean>()

  constructor(private http: HttpClient) {
   
  }

  login(obj: any): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signin', obj)
  }

  


}
