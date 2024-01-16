import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, MatInputModule, MatIconModule, FormsModule, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  value: string = '';

  constructor(private service : ListService){}

  mockCard = [
    {
      title: 'Roast Beef',
      tipe: 'Secondo Piatto',
      cocking: 'Procedimento',
      description: 'Descrizione',
      id: 1,
    },
    {
      title: 'Riso allo zafferano',
      tipe: 'Primo Piatto',
      cocking: 'Procedimento',
      description: 'Descrizione',
      id: 2,
    },
    {
      title: 'Tiramisu',
      tipe: 'Dolce',
      cocking: 'Procedimento',
      description: 'Descrizione',
      id: 3,
    },
    {
      title: 'Macedonia',
      tipe: 'Frutta',
      cocking: 'Procedimento',
      description: 'Descrizione',
      id: 4,
    },
  ];
}
