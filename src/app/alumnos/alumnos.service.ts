import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AlumnoSchema } from './alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnoslist :AlumnoSchema[] =[
    {
      'id':1,
      'name':'Pablo',
      'apellidos': 'Rospliguiosi',
      'edad': 12,
      'email': 'alumnos@gmail.com',
    },
    {
      'id':2,
      'name':'Ernesto',
      'apellidos': 'Rospliguiosi',
      'edad': 17,
      'email': 'alumnos@gmail.com',
    },
  ];

  index= this.alumnoslist.length;
  alumnoToEdit:any;
  alumnoToDelete:any;
  constructor(){ }
  getAlumnosList():Observable<any> {
    return of(this.alumnoslist);
  }
  getAlumnoToEdit():Observable<any> {
    return of(this.alumnoToEdit);
  }
  getAlumnoToDelete():Observable<any> {
    return of(this.alumnoToDelete);
  }
  getActualIndex():Observable<any> {
    return of(this.index);
  }
  obtenerAlumno(id: number): Observable<AlumnoSchema[]>{
    return this.getAlumnosList().pipe(
      map((alumnos: AlumnoSchema[]) => alumnos.filter((alumno: AlumnoSchema) => alumno.id === id))
    )
  }
}
