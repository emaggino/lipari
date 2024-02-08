import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { PdpService } from '../../services/pdp.service';
import { NgFor, NgIf } from '@angular/common';
import { ListService } from '../../services/list.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    NgxPaginationModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchResult: any = this.listService.searchList;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serachService: SearchService,
    private pdpService: PdpService,
    public listService: ListService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    console.log('searchlist search', this.searchResult);
    console.log('searchresult', this.searchResult);
  }

  searchList: any = this.listService.searchList;

  // submitSearch(val: string) {
  //   debugger
  //   console.log(val);
  //   this.listService.searchRecipe(val).subscribe((res) => {
  //     if (this.searchList.includes(res)) {
  //       console.log('searchlist', res);
  //       this.searchList.push(res);
  //       this.router.navigate(['/search']);
  //     } else {
  //       alert('notfound');
  //     }
  //   });
  //   console.log('searchlist search', this.searchList);
  //   //window.location.reload()
  //   // this.listService.list = this.list
  //   // this.search = true
  // }

  p: any
}
