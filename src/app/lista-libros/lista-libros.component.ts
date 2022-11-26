import { CarritoLibrosService } from './../carrito-libros.service';
import { CarritoComprasComponent } from './../carrito-compras/carrito-compras.component';
import { Component } from '@angular/core';
import { Libro } from './Libro';
import { LibrosDataService } from '../libros-data.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent {

  libros: Libro[] = [];


  constructor(
    private carrito: CarritoLibrosService,
    private LibrosDataService: LibrosDataService) {
  }

  ngOnInit(): void {
    this.LibrosDataService.conseguirDatos()
    .subscribe(libros => this.libros = libros);
  }

  agregarCarrito(libro: Libro): void {
    this.carrito.agregarCarrito(libro);
    libro.stock -= libro.cantidad;
    libro.cantidad = 0;
  }

  maxAlcanzado(m:string){
    alert(m);
  }
  
  


  
}





