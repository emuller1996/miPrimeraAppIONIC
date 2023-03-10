import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  {
    path:'Lista',
    component:AlumnosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
