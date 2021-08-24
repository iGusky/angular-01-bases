import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  
  constructor( private dbzService: DbzService ){}

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregarNuevoPersonaje( personaje: Personaje){
    console.log(personaje)
    this.personajes.push(personaje);
  }


}
