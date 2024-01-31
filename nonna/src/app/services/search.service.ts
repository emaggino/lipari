import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private http = inject(HttpClient)

  searchRecipe(titolo: string) {
    return this.http.get(`http://localhost:8080/api/ricette/search?titolo=${titolo}`)
  }
}
