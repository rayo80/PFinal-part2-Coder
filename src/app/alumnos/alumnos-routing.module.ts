
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlumnoContentComponent } from './alumno-content.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosInicioComponent } from './alumnos-inicio/alumnos-inicio.component';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';


const routes: Routes = [
  { path: '', component: AlumnosInicioComponent, children: [
    { path: 'listar', component: AlumnosTableComponent },
    { path: 'editar', component: AlumnosFormComponent },
    { path: 'agregar', component: AlumnosFormComponent },
    { path: 'detalle/:id', component: AlumnosDetalleComponent}
  ]} 
]; 

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
