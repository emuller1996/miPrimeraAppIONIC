import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoCrearComponent } from './alumno-crear/alumno-crear.component';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  {
    path:'Lista',
    component:AlumnosListaComponent
  },
  {
    path:'Crear',
    component:AlumnoCrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
