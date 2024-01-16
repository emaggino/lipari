import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
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

  constructor(private loginService: LoginService) {

  }

  isLogged = this.loginService.user.isLogged

  userValue: any;
  passValue: any;

  inputValue: string = '';

  // inputValue() {
  //   this.userValue = document.querySelector('input')

  //   console.log(this.userValue);

  // }

  checkInput() {
    if (this.userValue === '' || this.passValue === '') {
      return alert('inserisci qualcosa');
    } else if (this.userValue === 'admin' || this.passValue === 'admin') {
      this.loginService.user.isLogged = true;
    } else {
      return alert('credenziali non corrette')
    }
    console.log(this.loginService.user.isLogged);
  }


}
