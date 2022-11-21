import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../lista-libros/Libro';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})



export class InputNumeroComponent {
  constructor() { }
  @Input()
  cantidad!: number;
  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter <number> = new EventEmitter<number>();

  @Output()
  maxAlcanzado: EventEmitter <string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  cantidadMas():void{
    if (this.cantidad < this.max){
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxAlcanzado.emit("No hay más stock");
    }
  }

  cantidadMenos(){
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }
}

changeQuantity(event: any){

}

}



