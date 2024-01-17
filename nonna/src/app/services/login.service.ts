import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = false

  loginTrack: Subject<boolean> = new Subject<boolean>()

  constructor() {
    this.loginTrack.subscribe((value) => {
      this.isLogged = value
    })
   }

   toggleLoginVisibility() {
    this.loginTrack.next(!this.isLogged)
   }


}
