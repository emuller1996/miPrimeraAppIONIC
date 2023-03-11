import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcudientesListaComponent } from './acudientes-lista/acudientes-lista.component';

const routes: Routes = [
  {
    path : ':idAlumno/Alumno',
    component : AcudientesListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcudientesRoutingModule { }
