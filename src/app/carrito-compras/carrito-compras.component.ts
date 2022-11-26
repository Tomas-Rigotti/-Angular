import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoLibrosService } from '../carrito-libros.service';
import { Libro } from '../lista-libros/Libro';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent {

  listaCarrito$: Observable<Libro[]>;

  constructor(private carrito: CarritoLibrosService){
    this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }

}
