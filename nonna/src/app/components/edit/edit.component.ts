import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { AddService } from '../../services/add.service';
import { EditService } from '../../services/edit.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  constructor(
    public editService: EditService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {}

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

  editRicetta() {
    let recipeId = this.route.snapshot.paramMap.get('recipeId');
    this.editService.editRicetta(this.ricettaObj, recipeId).subscribe((res) => {
      console.log('response', res);
      this.router.navigate(['/']);
      alert('Ricetta modificata con successo!');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      height: '200px',
      data: {
        route: this.route
      }
    })

    dialogRef.afterClosed().subscribe((res) => {
      // let recipeId = this.route.snapshot.paramMap.get('recipeId');
      //   this.editService.editRicetta(this.ricettaObj, recipeId).subscribe((res) => {
      //     console.log('response', res);
      //     this.router.navigate(['/']);
      //     alert('Ricetta modificata con successo!');
      //   });
    })
  }
}
