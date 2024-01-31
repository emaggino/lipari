import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  exportAs: 'ngForm'
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

  onSubmit(form : NgForm){
    const email = form.value.email
    const password = form.value.password
    this.loginService.login(email, password).subscribe((data) => {
      console.log(data);
    })
    form.reset()
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
