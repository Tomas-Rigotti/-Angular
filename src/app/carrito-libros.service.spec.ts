import { TestBed } from '@angular/core/testing';

import { CarritoLibrosService } from './carrito-libros.service';

describe('CarritoLibrosService', () => {
  let service: CarritoLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
