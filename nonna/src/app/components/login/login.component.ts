import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, RouterModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userValue: any;
  passValue: any;

  inputValue: string = '';

  // inputValue() {
  //   this.userValue = document.querySelector('input')

  //   console.log(this.userValue);

  // }

  user = {
    isLogged: false,
  };

  checkInput() {
    if (this.userValue === '' || this.passValue === '') {
      return alert('inserisci qualcosa');
    } else if (this.userValue === 'admin' || this.passValue === 'admin') {
      this.user.isLogged = true;
    } else {
      return alert('credenziali non corrette')
    }
    console.log(this.user);
  }

  
}
