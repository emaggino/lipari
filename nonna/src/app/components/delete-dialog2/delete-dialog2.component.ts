import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../services/list.service';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-delete-dialog2',
  standalone: true,
  imports: [MatDialogClose, MatButtonModule, NgFor],
  templateUrl: './delete-dialog2.component.html',
  styleUrl: './delete-dialog2.component.css',
})
export class DeleteDialog2Component implements OnInit {
  constructor(
    private router: Router,
    public listService : ListService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteDialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: { route: ActivatedRoute },
  ) {}

  ngOnInit(): void {
    this.loadList()
  }

  deleteRicetta(id: any){
    this.listService.deleteRicetta(id).subscribe((res) => {
      console.log('delete response', res);
      alert('Ricetta eliminata con successo')
    })
    this.router.navigate(['/'])
  }
  newList : any[] = []
  list : any = []
  
  loadList() {
    this.listService.getList().subscribe({
      next : (list : any) => {
        this.list = list
        console.log('lista', list);
      },
      error: (error) => {console.log('error', error);
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
