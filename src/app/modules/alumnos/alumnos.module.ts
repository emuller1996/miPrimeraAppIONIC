import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { IonicModule } from '@ionic/angular';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { AlumnoCrearComponent } from './alumno-crear/alumno-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoEditarComponent } from './alumno-editar/alumno-editar.component';

@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnoCrearComponent,
    AlumnoEditarComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlumnosModule { }
