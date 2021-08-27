import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor( private dbzService: DbzService){}

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if( this.nuevo.nombre.trim() === '') return;

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre:'',
      poder:0
    }

  }
}
