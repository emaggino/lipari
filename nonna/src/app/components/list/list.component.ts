import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

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
    ReactiveFormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(
    public loginService: LoginService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    public dialog: MatDialog,
    public listService: ListService
  ) {
  }

  ngOnInit(): void {
    this.role = this.readLocalStorage('adminLogin')
    if (localStorage.getItem('adminLogin')) {
      this.loginService.isAdmin = true;
    }
    this.loadList();
    let query = this.activeRoute.snapshot.paramMap.get('query');
  }

  searchForm: FormGroup  = new FormGroup({
    search: new FormControl('')
  })

  searchList: any[] = []

  newList : any[] = []

  role : any


  convertToImage() {
    const img = new Image()
    img.src = `data:image/jpeg;base64,${img}`
  }

  readLocalStorage(key: any) {
    return localStorage.getItem(key)
  }

  openDialog(id: any) {
    this.listService.dialogId = id;
    const dialogRef = this.dialog.open(DeleteDialog2Component, {
      width: '520px',
      height: '300px',
      data: {
        route: this.route,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.listService.getList().subscribe({
        next: (list: any) => {
          this.list = list;
        },
        error: (err) => {
          console.log('error', err);
        },
      });
    });
  }

  deleteRicetta(id: any) {
    this.listService.deleteRicetta(id).subscribe((res) => {
      console.log('delete response', res);
    });
    window.location.reload()
  }

  isAdmin = this.loginService.isAdmin;

  //http = inject(HttpClient)
  p: any;
  public list: any= [];
  s: any;
  public preferitiList: any;

  loadList() {
    this.listService.getList().subscribe({
      next: (list: any) => {
        this.list = list;
        console.log('lista', list);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  search: boolean = false

  

  // preferiti(item: any) {
  //   this.listService.addToFavourites(item)
  //   localStorage.setItem('preferiti', JSON.stringify(item))
  //   alert('ricetta aggiunta ai preferiti')
  // }

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
