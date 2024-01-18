import { TestBed } from '@angular/core/testing';

import { DolciService } from './dolci.service';

describe('DolciService', () => {
  let service: DolciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
