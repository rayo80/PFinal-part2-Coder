import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosInicioComponent } from './alumnos-inicio/alumnos-inicio.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';
import { AngularMaterialModule } from '../modules/material.module';

@NgModule({
  declarations: [
    AlumnosInicioComponent,
    AlumnosDetalleComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    AlumnosRoutingModule
  ],
  exports: [
  ]
})
export class AlumnosModule { }
