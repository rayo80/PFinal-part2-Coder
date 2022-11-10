import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnoSchema } from '../alumno.interface';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-alumnos-detalle',
  templateUrl: './alumnos-detalle.component.html',
  styleUrls: ['./alumnos-detalle.component.scss']
})
export class AlumnosDetalleComponent implements OnInit {
  alumno$!: Observable<AlumnoSchema[]>;
  constructor(
    private activateRoute: ActivatedRoute,
    private alumnoService: AlumnosService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.alumno$ = this.alumnoService.obtenerAlumno(id);
    })
  }
}
