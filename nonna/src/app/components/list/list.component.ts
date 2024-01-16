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
      title: 'Pappassini',
      tipe: 'Second dish',
      cocking: 'jsjsjssjsjsjsjjsjsjsj',
      description: 'nsdnsdjdwidnwdiqdqwnndqwnidniqdniwqindnqwn',
      id: 1,
    },
    {
      title: 'Pappassini',
      tipe: 'Second dish',
      cocking: 'jsjsjssjsjsjsjjsjsjsj',
      description: 'nsdnsdjdwidnwdiqdqwnndqwnidniqdniwqindnqwn',
      id: 2,
    },
    {
      title: 'Pappassini',
      tipe: 'Second dish',
      cocking: 'jsjsjssjsjsjsjjsjsjsj',
      description: 'nsdnsdjdwidnwdiqdqwnndqwnidniqdniwqindnqwn',
      id: 3,
    },
    {
      title: 'Pappassini',
      tipe: 'Second dish',
      cocking: 'jsjsjssjsjsjsjjsjsjsj',
      description: 'nsdnsdjdwidnwdiqdqwnndqwnidniqdniwqindnqwn',
      id: 4,
    },
  ];
}
