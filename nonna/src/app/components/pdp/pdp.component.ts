import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ListService } from '../../services/list.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, NgFor],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.css',
})
export class PdpComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
  ) {}

  tipoPiatto = this.listService.tipoPortata;
}
