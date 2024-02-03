import { TestBed } from '@angular/core/testing';

import { FavoritiService } from './favoriti.service';

describe('FavoritiService', () => {
  let service: FavoritiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
