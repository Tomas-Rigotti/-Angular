import { CarritoLibrosService } from './../carrito-libros.service';
import { CarritoComprasComponent } from './../carrito-compras/carrito-compras.component';
import { Component } from '@angular/core';
import { Libro } from './Libro';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent {

  libros: Libro[] = [
    {
      "titulo": "El resplandor",
      "genero": "Terror",
      "cantidad_pag": 599,
      "autor": "Stephen King",
      "stock": 0,
      "imagen": "assets/img/resplandor.jpg",
      "oferta": false,
      "cantidad": 0,
    }, 
    {
      "titulo": "La peste",
      "genero": "Novela filosofica",
      "cantidad_pag": 360,
      "autor": "Albert Camus",
      "stock": 10,
      "imagen": "assets/img/peste.jpg",
      "oferta": true,
      "cantidad": 0,
    },
    {
      "titulo": "Harry Potter y la piedra filosofal",
      "genero": "Novela fantastica",
      "cantidad_pag": 256,
      "autor": "J.K Rowling",
      "stock": 5,
      "imagen": "assets/img/Hpotter.jpeg",
      "oferta": false,
      "cantidad": 0,
    },
    
  ];
  carrito: CarritoLibrosService;

  constructor() {
    this.carrito = new CarritoLibrosService();
  }

  agregarCarrito(libro: Libro): void {
    this.carrito.agregarCarrito(libro);
  }

  maxAlcanzado(m:string){
    alert(m);
  }
  
  


  
}





