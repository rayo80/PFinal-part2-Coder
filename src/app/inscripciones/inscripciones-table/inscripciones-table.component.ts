import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/alumnos/alumnos.service';
import { CursosService } from 'src/app/cursos/cursos.service';

@Component({
  selector: 'app-inscripciones-table',
  templateUrl: './inscripciones-table.component.html',
  styleUrls: ['./inscripciones-table.component.scss']
})
export class InscripcionesTableComponent implements OnInit {

  constructor(private alumnosService: AlumnosService, private cursosService: CursosService,
              private inscripcionesService: CursosService) { }
  //variables para leer los servicios
  alumnos: any[];
  cursos: any[];
  inscripciones: any[];
  ngOnInit(): void {
    this.alumnosService.getAlumnosList().subscribe(
      (val) => this.alumnos = val
    )
    this.cursosService.getCursosList().subscribe(
      (val) => this.cursos = val
    )
    this.inscripcionesService.getCursosList().subscribe(
      (val) => this.cursos = val
    )
  }
  displayedColumns=['id','alumno','curso','fecha','editar','eliminar'];


  onUpdate(elemento:any){
    console.log("update");
  }
  onDelete(elemento:any){
    console.log("delete");
  }
  onAdd(){
    console.log("add");
  }
}
