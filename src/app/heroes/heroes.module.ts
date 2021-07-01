import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //EN EXPORTS VA LO QUE QUEREMOS QUE SEA VISIBLE FUERA DEL MODULO
    exports:[
        ListadoComponent
    ],
    //VAN MODULOS
    imports:[
        CommonModule
    ]
})
export class heroesModule {
    
}