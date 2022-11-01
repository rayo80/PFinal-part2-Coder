
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlumnoContentComponent } from './alumno-content.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';

const routes: Routes = [
  {
    path: "",
    component: AlumnoContentComponent,
    /*children:[
      {
        path: "formulario",
        component: AlumnosFormComponent,
      }
    ]*/

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
