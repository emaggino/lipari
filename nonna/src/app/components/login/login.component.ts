import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private route: Router,
    private loginService: LoginService,
    private router: ActivatedRoute
  ) {}

  //isLogged : any = localStorage.getItem('isLogged');

  isLogged = this.loginService.isLogged

  login () {
    this.isLogged = true
    console.log(this.isLogged);
  }

  userValue: any;
  passValue: any;

  inputValue: string = '';

  // inputValue() {
  //   this.userValue = document.querySelector('input')

  //   console.log(this.userValue);

  // }

  ngOnInit(): void {
      console.log(this.isLogged);
  }

  checkInput() {
    if (this.userValue === 'admin' && this.passValue === 'admin') {
      alert('sei Loggato!');
      this.loginService.isLogged = true 
      //localStorage.setItem('isLogged', 'true')
    } else {
      alert('credenziali non corrette');
    }
    console.log(this.isLogged);
  }

  // navigate() {
  //   this.route.navigate(['pdp'], {relativeTo: this.router})
  // }
}
