import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = false

  
  
  //loginTrack: Subject<boolean> = new Subject<boolean>()

  constructor() {
    window.addEventListener('storage', function(e) {
      if(e.key === 'loginStatus') {
        console.log('someone changed my local storage');
      }
    })
    localStorage.setItem('loginStatus', 'false')
  }


}
