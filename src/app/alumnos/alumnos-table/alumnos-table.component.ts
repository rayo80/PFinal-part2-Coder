import { AlumnosService } from '../alumnos.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlumnoSchema } from '../../models/alumno.interface'


@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent implements OnInit {
  toeliminate: any;

  constructor(private router: Router, private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnosList().subscribe(
      (val)=>this.alumnos=val
    )
  }

  alumnos: AlumnoSchema[]; //se recibe data
  alumnoToDelete:any;
  @Output() OcultarTabla= new EventEmitter<any>();


  displayedColumns: string[] = ['id', 'name', 'apellido', 'complete', 'email', 'edad', 'editar', 'eliminar'];
  @ViewChild(MatTable) table: MatTable<AlumnoSchema>;

  onUpdate(elemento:AlumnoSchema){

    //ahora este lo enviamos a nuestro formulario
    this.alumnosService.alumnoToEdit=elemento;
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }

  onDelete(elemento:AlumnoSchema){
    let indexOfAlumnos=this.alumnos.findIndex((al:any) => al.id===elemento.id);

    this.alumnos.splice(indexOfAlumnos,1);
    this.alumnosService.alumnoslist=this.alumnos!
    this.table.renderRows();
    //ahora que eliminamos actualizaremos la data de alumnos
  }

  onAdd() {
    //al hacer click ocultamos nuestra tabla y mostramos solo el formulario
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }
  
}
