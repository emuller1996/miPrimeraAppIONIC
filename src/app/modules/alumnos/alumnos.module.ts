import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { IonicModule } from '@ionic/angular';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { AlumnoCrearComponent } from './alumno-crear/alumno-crear.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnoCrearComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class AlumnosModule { }
