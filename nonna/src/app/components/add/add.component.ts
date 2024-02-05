import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(private listService: ListService, public addService: AddService, private router: Router) {}

  disableSelect = new FormControl(false);

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
      alert('ricetta creata con successo!');
      this.router.navigate(['/']);
    });
    // if (this.categoriaId.value === 'primo') {
    //   this.ricettaObj.categoria.id = 1;
    // }
    // if (this.categoriaId.value === 'secondo') {
    //   this.ricettaObj.categoria.id = 2;
    // }
    // if (this.categoriaId.value === 'dolce') {
    //   this.ricettaObj.categoria.id = 3;
    // }

    // this.ricettaObj.categoria.id = Math.random()
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      console.log(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
