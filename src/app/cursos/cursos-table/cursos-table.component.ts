import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CursosService } from 'src/app/cursos/cursos.service';
import { CursoSchema } from '../../models/curso.interface';

@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.scss']
})
export class CursosTableComponent implements OnInit {
  constructor(private cursosService: CursosService) { }
  //variables para leer los servicios
  cursos: CursoSchema[];
  cursoToDelete:any;
  //ocultar la pestaña
  @Output() OcultarTabla= new EventEmitter<any>();
  //variables para tabla
  displayedColumns: string[] = ['id', 'name', 'codigo', 'horario','editar','eliminar'];
  @ViewChild(MatTable) table: MatTable<CursoSchema>;
  ngOnInit(): void {
    this.cursosService.getCursosList().subscribe(
      (val)=>this.cursos=val
    )
  }
  onUpdate(elemento:CursoSchema){

    //ahora este lo enviamos a nuestro formulario
    this.cursosService.cursoToEdit=elemento;
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }

  onDelete(elemento:CursoSchema){
    let indexlocal=this.cursos.findIndex((al:any) => al.id===elemento.id);

    this.cursos.splice(indexlocal,1);
    this.cursosService.cursoslist=this.cursos!
    this.table.renderRows();
    //ahora que eliminamos actualizaremos la data de alumnos
  }
  onAdd() {
    //al hacer click ocultamos nuestra tabla y mostramos solo el formulario
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }
}
