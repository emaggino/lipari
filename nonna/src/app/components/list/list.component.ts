import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
    private loginService: LoginService,
    private activeRoute: ActivatedRoute
  ) {}

  private listService = inject(ListService)

  ngOnInit(): void {
      this.loadList()
  }


  //http = inject(HttpClient) 
  p: any
  list: any = []

  // fetchPosts(){
  //   this.http.get('https://fakestoreapi.com/products').subscribe((list: any) => {
  //     console.log(list);
  //     this.list = list;
  //   })
  // }

  // loadList(){
  //   this.listService.getList().subscribe((list: any) => {
  //     console.log(list);
  //     this.list = list
  //   })
  // }

  s: any
 
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
