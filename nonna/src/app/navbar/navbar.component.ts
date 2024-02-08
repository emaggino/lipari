import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public service: LoginService, private router: Router, public route: ActivatedRoute, private listService: ListService) {
    
  } 

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.service.isAdmin = true;
    }
    if(localStorage.getItem('userLogin') || localStorage.getItem('adminLogin')){
      this.service.isLogged = true
    }
    else if(localStorage.getItem('adminLogin')){
      this.service.isAdmin = true
    }
  }

  //isAdmin = localStorage.getItem('adminLogin')

  isAdmin = this.service.isAdmin

  isLogged = this.service.isLogged

  clearArray(){
    this.listService.searchList = []
  }

  logOut() {
    this.service.isLogged = false
    this.service.isAdmin = false
    localStorage.removeItem('user')
    localStorage.removeItem('adminLogin')
    localStorage.removeItem('userLogin')
    localStorage.removeItem('accessToken')
    this.router.navigate(['/'])
  }

}
