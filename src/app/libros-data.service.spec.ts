import { TestBed } from '@angular/core/testing';

import { LibrosDataService } from './libros-data.service';

describe('LibrosDataService', () => {
  let service: LibrosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
