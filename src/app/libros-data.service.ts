import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './lista-libros/Libro';


@Injectable({
  providedIn: 'root'
})
export class LibrosDataService {

  constructor(private http: HttpClient) { }

  public conseguirDatos(): Observable<Libro[]>{
    return this.http.get<Libro[]>("https://6381f62a53081dd5498c79ba.mockapi.io/libros");
  }

}
