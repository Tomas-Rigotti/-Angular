import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';
import { FormularioCarritoComponent } from './formulario-carrito/formulario-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    CarritoComprasComponent,
    ContactoComponent,
    HomeComponent,
    InputNumeroComponent,
    FormularioCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
