import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursoslist=<any>[];
  index=0;
  cursoToEdit:any;
  cursoToDelete:any;
  constructor() { }
  getCursosList():Observable<any> {
    return of(this.cursoslist);
  }
  getCursoToEdit():Observable<any> {
    return of(this.cursoToEdit);
  }
  getActualIndex():Observable<any> {
    return of(this.index);
  }
}
