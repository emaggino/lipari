import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { ListComponent } from './components/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GenericInterceptor } from './generic.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    HomepageComponent,
    PdpComponent,
    ListComponent,
    MatFormFieldModule,
    NavbarComponent,
    MatSidenavModule,
    FooterComponent,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: GenericInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nonna';
}
