import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { NgFor, NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table';

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
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(
    private listService: ListService,
    private loginService: LoginService
  ) {}

  totalItems = this.listService.totalItems
  pageSize = this.listService.pageSize

  onPageChange (event: PageEvent) {
    this.listService.pageChanged.emit(event)

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    const currentPageData = this.mockCard.slice(startIndex, endIndex);
  }

  value: string = '';
  isLogged = this.loginService.isLogged;

  mockCard = this.listService.mockCard;

  element = document.getElementById('ozi')

  delete() {
    this.element?.remove()
  }
}
