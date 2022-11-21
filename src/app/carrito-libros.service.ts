import { Injectable } from '@angular/core';
import { Libro } from './lista-libros/Libro';

@Injectable({
  providedIn: 'root'
})
export class CarritoLibrosService {
  agregarCarrito(libro: Libro) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
