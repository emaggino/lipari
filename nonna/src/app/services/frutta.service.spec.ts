import { TestBed } from '@angular/core/testing';

import { FruttaService } from './frutta.service';

describe('FruttaService', () => {
  let service: FruttaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruttaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
