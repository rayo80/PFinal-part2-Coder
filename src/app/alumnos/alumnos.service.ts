import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnoslist=<any>[];
  index=0;
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
}
