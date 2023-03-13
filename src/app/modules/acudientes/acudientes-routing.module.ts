import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcudientesCrearComponent } from './acudientes-crear/acudientes-crear.component';
import { AcudientesListaComponent } from './acudientes-lista/acudientes-lista.component';

const routes: Routes = [
  {
    path : ':idAlumno/Alumno',
    component : AcudientesListaComponent
  },
  {
    path : ':idAlumno/Alumno/Crear',
    component : AcudientesCrearComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcudientesRoutingModule { }
