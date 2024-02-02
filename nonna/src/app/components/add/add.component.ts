import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(public addService: AddService, private router: Router) {}

  ricettaObj = {
    titolo: '',
    preparazione: '',
    quantitaPersone: '',
    ingredienti: '',
    image: '',
    categoria: {
      id: 1,
      categoria: '',
    },
  };

  aggiungiRicetta() {
    this.addService.creaRicetta(this.ricettaObj).subscribe((res) => {
      console.log('response:', res);
      console.log('token', res.token);
      //console.log(this.ricettaObj);
      // const token = localStorage.getItem('accessToken');
      // console.log('token', token);
      alert('ricetta creata con successo!')
      this.router.navigate(['/'])
    });

    // this.ricettaObj.categoria.id = Math.random()
  }
}
