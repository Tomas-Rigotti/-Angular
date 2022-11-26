import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-carrito',
  templateUrl: './formulario-carrito.component.html',
  styleUrls: ['./formulario-carrito.component.scss']
})
export class FormularioCarritoComponent {

  restablecer(){
    window.location.reload();
  }
}
