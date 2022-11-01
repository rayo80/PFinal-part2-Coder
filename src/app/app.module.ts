import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

//ROUTING
import { AppRoutingModule } from './app-routing.module';
import { AlumnosRoutingModule } from './alumnos/alumnos-routing.module';
import { ProfesoresRoutingModule } from './profesores/profesores-routing.module';

//modulo de alumnos
import { AlumnoContentComponent } from './alumnos/alumno-content.component';
import { AlumnosFormComponent } from './alumnos/alumnos-form/alumnos-form.component';
import { AlumnosTableComponent } from './alumnos/alumnos-table/alumnos-table.component';

//extra
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ToolbarComponent,
    AlumnoContentComponent,
    AlumnosFormComponent,
    AlumnosTableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

    AppRoutingModule,
    AlumnosRoutingModule,
    ProfesoresRoutingModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
