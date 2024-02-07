import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListService } from '../../services/list.service';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatCardModule, RouterLink, NgFor, NgxPaginationModule],
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent implements OnInit {
  constructor(public listService: ListService){}

  ngOnInit(): void {  
    this.loadPreferiti()
  }

  list : any 

  new: any

  preferitiList = this.listService.newList

  loadPreferiti(){
    this.listService.getPreferiti().subscribe({
      next: (list: any) => {
        this.list = list
        console.log('lista preferiti', list);

      },
      error: (error) => {
        console.log('error', error);
      },
    })
  }

  
}
