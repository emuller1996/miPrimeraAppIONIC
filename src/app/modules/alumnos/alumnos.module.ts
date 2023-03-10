import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { IonicModule } from '@ionic/angular';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';


@NgModule({
  declarations: [
    AlumnosListaComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    IonicModule
  ]
})
export class AlumnosModule { }
