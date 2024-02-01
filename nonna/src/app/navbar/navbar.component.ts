import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  constructor(public service: LoginService) {
    // dispatchEvent(new CustomEvent('loginStatus', (event){
    //   if()
    // }))
  } 

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.service.isLogged = true
    }
    else if(localStorage.getItem('adminLogin')){
      this.service.isAdmin = true
    }
  }

  isAdmin = localStorage.getItem('adminLogin')

  isLogged = localStorage.getItem('loginStatus')

  logOut() {
    this.service.isLogged = false
    this.service.isAdmin = false
    localStorage.removeItem('user')
    localStorage.removeItem('adminLogin')
    localStorage.removeItem('userLogin')
  }

}
