import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  // PROPIEDADES
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];
  
  // GETTERS & SETTERS
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  // CONSTRUCTOR
  constructor(){
    console.log('Servicio Inicializado...')
  }

  // METODOS
  agregarPersonaje( personaje: Personaje ){
    this._personajes.push( personaje )
  }
}