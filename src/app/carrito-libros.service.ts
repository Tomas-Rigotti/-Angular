import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from './lista-libros/Libro';

/**
 * la logica del carrito 
 */

@Injectable({
  providedIn: 'root'
})

export class CarritoLibrosService {

  private _listaCarrito: Libro[] = [];
  listaCarrito: BehaviorSubject<Libro[]> = new BehaviorSubject(this._listaCarrito);

  constructor() { }

  agregarCarrito(libro: Libro) {
    let item = this._listaCarrito.find((v1) => v1.titulo == libro.titulo);
    if(!item){
      this._listaCarrito.push({... libro});
    } else {
      item.cantidad += libro.cantidad;
    }

    console.log(this._listaCarrito);
    this.listaCarrito.next(this._listaCarrito);
  }

  
}
