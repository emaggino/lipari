import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { PdpService } from '../../services/pdp.service';
import { NgFor } from '@angular/common';
import { ListService } from '../../services/list.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, NgFor, NgxPaginationModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {

  searchResult: any = this.listService.searchList

  constructor(
    private route: ActivatedRoute,
    private serachService: SearchService,
    private pdpService: PdpService,
    public listService: ListService
  ) {}

  ngOnInit(): void {
    console.log('searchlist search', this.searchResult);
  }

  searchList: any[] = []

  submitSearch(val: string) {
    console.log(val);
    this.listService.searchRecipe(val).subscribe((res) => {
      console.log('searchlist', res);
      this.searchList.push(res)
    })
    console.log('searchlist search',this.searchList);
    //window.location.reload()
    // this.listService.list = this.list
    // this.search = true
  }
}
