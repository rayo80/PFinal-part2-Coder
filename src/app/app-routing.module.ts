import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
    },
    {
     path: "alumnos",
     loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    },
    {
      path: "profesores",
      loadChildren: () => import('./profesores/profesores.module').then((m) => m.ProfesoresModule),
    },
    {
      path: "cursos",
      loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    },
    {
      path: "inscripciones",
      loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
