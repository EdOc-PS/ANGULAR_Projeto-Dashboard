import { TestBed } from '@angular/core/testing';

import { RAWGService } from './rawg.service';

describe('RAWGService', () => {
  let service: RAWGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RAWGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
