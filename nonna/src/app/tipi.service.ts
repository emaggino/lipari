import { Injectable } from '@angular/core';
import { ListService } from './services/list.service';

@Injectable({
  providedIn: 'root'
})
export class TipiService {

  constructor(private listService: ListService) { }

  getRecipe(id: string) {
    return this.listService.tipoPortata
  }
}
