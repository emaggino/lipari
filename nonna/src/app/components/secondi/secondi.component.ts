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
import { SecondiService } from '../../services/secondi.service';

@Component({
  selector: 'app-secondi',
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
  templateUrl: './secondi.component.html',
  styleUrl: './secondi.component.css',
})
export class SecondiComponent implements OnInit {
  constructor(
    private secondiService: SecondiService,
    private listService: ListService,
    private loginService: LoginService,
    private tipiService: TipiService,
    private activeRoute : ActivatedRoute,
    private typeService : TipiService
  ) {}

  ngOnInit(): void {
    // let typeId = this.activeRoute.snapshot.paramMap.get('typeId')
    // console.warn(typeId)
    // typeId && this.typeService.getRecipe(typeId)
  }



  value: string = '';
  isLogged = this.loginService.isLogged;

  tipoPiatto = this.secondiService.mockSecondi;

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

