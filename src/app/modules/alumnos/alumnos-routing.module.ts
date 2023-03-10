import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoCrearComponent } from './alumno-crear/alumno-crear.component';
import { AlumnoEditarComponent } from './alumno-editar/alumno-editar.component';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  {
    path:'Lista',
    component:AlumnosListaComponent
  },
  {
    path:'Crear',
    component:AlumnoCrearComponent
  },
  {
    path:'Editar/:id',
    component:AlumnoEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
