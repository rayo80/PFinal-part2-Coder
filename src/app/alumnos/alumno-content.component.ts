import { Component, OnInit } from '@angular/core';
import { AlumnoSchema } from '../models/alumno.interface';

@Component({
  selector: 'app-alumno-content',
  templateUrl: './alumno-content.component.html',
  styleUrls: ['./alumno-content.component.scss']
})
export class AlumnoContentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  
  data:any=[];
  dataenviada = false;
  alumnoToEdit:AlumnoSchema|null; //esto es lo que enviamos al form cuando lo trataremos de editar
  

  //el formulario envia un valor, hora de ocultarlo
  onItemAdd(e:any){
    this.dataenviada=!e;
  }
  onToCreate(e:any){
    this.dataenviada=e;
  }

}
