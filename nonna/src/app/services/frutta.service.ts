import { Injectable } from '@angular/core';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class FruttaService {

  constructor(private listService: ListService) { }

  mockFrutta = [
    {
      title: 'Macedonia',
      tipe: 'Frutta',
      difficolta: 'facile',
      cocking: 'Procedimento',
      description: 'pppo',
      valutazione: '2 su 5',
      id: 4,
      image:
        'https://media.gettyimages.com/id/98841227/it/foto/fruit-salad.jpg?s=612x612&w=gi&k=20&c=C82SgZVGFGSiYVZDxwGGkpT0GsP8qfCWiLGWRYEhGsw=',
    },
  ] 
}


