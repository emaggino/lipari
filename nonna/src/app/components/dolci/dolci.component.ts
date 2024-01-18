import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { NgFor, NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TipiService } from '../../tipi.service';
import { DolciService } from '../../services/dolci.service';

@Component({
  selector: 'app-dolci',
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
  ],
  templateUrl: './dolci.component.html',
  styleUrl: './dolci.component.css',
})
export class DolciComponent implements OnInit {
  constructor(
    private dolciService: DolciService,
    private listService: ListService,
    private loginService: LoginService,
    private tipiService: TipiService,
    private activeRoute : ActivatedRoute,
    private typeService : TipiService
  ) {}

  totalItems = this.listService.totalItems;
  pageSize = this.listService.pageSize;

  ngOnInit(): void {
    // let typeId = this.activeRoute.snapshot.paramMap.get('typeId')
    // console.warn(typeId)
    // typeId && this.typeService.getRecipe(typeId)
  }

  onPageChange(event: PageEvent) {
    this.listService.pageChanged.emit(event);

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    const currentPageData = this.tipoPiatto.slice(startIndex, endIndex);
  }

  value: string = '';
  isLogged = this.loginService.isLogged;

  tipoPiatto = this.dolciService.mockDolci;

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


