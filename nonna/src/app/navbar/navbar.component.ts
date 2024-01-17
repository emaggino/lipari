import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogged: any
  constructor(private loginService: LoginService) {

  } 

  get isUserLogged() : boolean {
    return this.loginService.isLogged
  }

  logOut() {
    this.loginService.isLogged = false
    console.log(this.loginService.isLogged);
  }

}
