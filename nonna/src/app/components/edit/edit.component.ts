import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { EditService } from '../../services/edit.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(public editService: EditService) {}

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

  // aggiungiRicetta() {
  //   this.addService.creaRicetta(this.ricettaObj).subscribe((res) => {
  //     console.log('response:', res);
  //     //console.log(this.ricettaObj);
  //     const token = localStorage.getItem('accessToken');
  //     console.log('token', token);
  //   });

    // this.ricettaObj.categoria.id = Math.random()
  // }
}

