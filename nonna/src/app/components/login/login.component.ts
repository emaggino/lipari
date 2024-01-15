import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email])
  hide = true

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
