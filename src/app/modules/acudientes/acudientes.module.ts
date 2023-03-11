import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcudientesRoutingModule } from './acudientes-routing.module';
import { AcudientesListaComponent } from './acudientes-lista/acudientes-lista.component';
import { AcudientesCrearComponent } from './acudientes-crear/acudientes-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AcudientesListaComponent,
    AcudientesCrearComponent
  ],
  imports: [
    CommonModule,
    AcudientesRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AcudientesModule { }
