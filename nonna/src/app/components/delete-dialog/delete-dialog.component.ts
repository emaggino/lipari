import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogRef} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from '../../services/edit.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogClose, MatDialogActions],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(
    private router: Router,
    private dialogService: DialogService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {route: ActivatedRoute}) {}

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
      let recipeId = this.data.route.snapshot.paramMap.get('recipeId')
      this.dialogService.editRicetta(this.ricettaObj, recipeId).subscribe((res) => {
        console.log('response', res);
        this.router.navigate(['/']);
        alert('Ricetta modificata con successo!');
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    click(){
      console.log('funge');
      
    }
}
