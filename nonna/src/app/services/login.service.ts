import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = true
  isAdmin = true

  loginUrl = `http://localhost:8080/api/auth/signin`

  
  
  //loginTrack: Subject<boolean> = new Subject<boolean>()

  constructor(private http: HttpClient) {
   
  }

  login(email: string, password: string){
    return this.http.post(this.loginUrl , {email: email, password: password})
  }


}
