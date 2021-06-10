import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent  {
    
    heroes       : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Falcon', 'Antman']
    heroeBorrado : string  = ''

    borrarHeroe(): void {     
         this.heroeBorrado  = this.heroes.shift() || '' ;
             
    }
 
}
