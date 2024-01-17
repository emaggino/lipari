import { Component, OnInit, Pipe } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ListService } from '../../services/list.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, NgFor,],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.css',
})
export class PdpComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
  ) {}

  mockPrimi = this.listService.mockPrimi
  mockSecondi = this.listService.mockSecondi
  mockDolci = this.listService.mockDolci
  mockFrutta = this.listService.mockFrutta

  tipoPiatto = this.listService.tipoPortata;

  ngOnInit(): void {
      let id: number
      this.route.params.subscribe(params => id = params['id'])
  }
}
