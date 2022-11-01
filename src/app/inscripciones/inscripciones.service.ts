import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor() { }
  inscripcioneslist=<any>[];
  index=0;
  inscripcionToEdit:any;
  inscripcionToDelete:any;
  getInscripcionesList():Observable<any> {
    return of(this.inscripcioneslist);
  }
  getInscripcionToEdit():Observable<any> {
    return of(this.inscripcionToEdit);
  }
  getActualIndex():Observable<any> {
    return of(this.index);
  }
}
