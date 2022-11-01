import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionesTableComponent } from './inscripciones-table/inscripciones-table.component';
import { InscripcionesFormComponent } from './inscripciones-form/inscripciones-form.component';
import { AngularMaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesTableComponent,
    InscripcionesFormComponent,
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class InscripcionesModule { }
