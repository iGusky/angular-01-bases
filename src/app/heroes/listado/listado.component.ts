import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Capitan America'];
  borrado: string = '';

  borrarHeroe(): void{
    this.borrado = this.heroes.pop() || '';
  }

}
