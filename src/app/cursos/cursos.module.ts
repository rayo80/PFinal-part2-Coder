import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosTableComponent } from './cursos-table/cursos-table.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { AngularMaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosComponent,
    CursosTableComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
