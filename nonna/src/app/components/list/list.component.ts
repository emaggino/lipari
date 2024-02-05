import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DeleteDialog2Component } from '../delete-dialog2/delete-dialog2.component';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    NgFor,
    NgIf,
    NgSwitch,
    FooterComponent,
    NgxPaginationModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit{
  constructor(
    public loginService: LoginService,
    private activeRoute: ActivatedRoute,
    private route : Router,
    public dialog: MatDialog,
    public listService: ListService
  ) {}

  

  ngOnInit(): void {
      if(localStorage.getItem('user')){
        this.loginService.isAdmin = true
      }
      this.loadList()
      let query = this.activeRoute.snapshot.paramMap.get('query')
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteDialog2Component, {
      width: '520px',
      height: '300px',
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

  deleteRicetta(id: any){
    this.listService.deleteRicetta(id).subscribe((res) => {
      console.log('delete response', res);
    })
    
  }

  isAdmin = this.loginService.isAdmin


  //http = inject(HttpClient) 
  p: any
  list: any = []
  s: any
  public preferitiList : any[] = []

  
 
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

  submitSearch(val: string) {
    console.warn(val);
    this.route.navigate([`search/${val}`])
  }





  value: string = '';
  isLogged = this.loginService.isLogged;

  tipoPiatto = this.listService.tipoPortata;

  element = document.getElementById('ozi');

  // delete() {
  //   for () {
  //     if (this.mockCard.length > 1) {
  //       this.mockCard.splice(card.id);
  //     } else {
  //       alert('non puoi rimuovere questo elemento, aggiungine prima uno nuovo!');
  //     }
  //   }
  //   console.log('item removed');
  // }

  
}
