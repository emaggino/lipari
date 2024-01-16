import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, RouterModule, MatButtonModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(
    private route : Router,
    private loginService: LoginService,
    private router: ActivatedRoute
    ) {

  }

  isLogged = this.loginService.isLogged

  userValue: any;
  passValue: any;

  inputValue: string = '';

  // inputValue() {
  //   this.userValue = document.querySelector('input')

  //   console.log(this.userValue);

  // }

  checkInput() {
    if (this.userValue === 'admin' || this.passValue === 'admin') {
      alert('sei Loggato!')
      //this.route.navigate(['/pdp'])
      this.loginService.isLogged = true;

    } else {
      alert('credenziali non corrette')
    }
    console.log(this.loginService.isLogged);
  }

  // navigate() {
  //   this.route.navigate(['pdp'], {relativeTo: this.router})
  // }


}
