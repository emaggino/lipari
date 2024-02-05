import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { PdpService } from '../../services/pdp.service';
import { NgFor } from '@angular/common';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {

  searchResult : any

  constructor(
    private route: ActivatedRoute,
    private serachService: SearchService,
    private pdpService: PdpService,
    public listService: ListService
  ) {}

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query');
    console.log(this.searchResult);

    query && this.serachService.searchRecipe(query).subscribe((res) => {
      this.searchResult = res
    })
  }
}
