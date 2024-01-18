import { TestBed } from '@angular/core/testing';

import { SecondiService } from './secondi.service';

describe('SecondiService', () => {
  let service: SecondiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
