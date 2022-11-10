import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoSchema } from './alumno.interface';

@Component({
  selector: 'app-alumno-content',
  templateUrl: './alumno-content.component.html',
  styleUrls: ['./alumno-content.component.scss']
})
export class AlumnoContentComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  
  data:any=[];
  dataenviada = false;
  alumnoToEdit:AlumnoSchema|null; //esto es lo que enviamos al form cuando lo trataremos de editar
  

  //el formulario envia un valor, hora de ocultarlo
  onItemAdd(e:any){
    this.router.navigate(['alumnos/agregar']);
    this.dataenviada=!e;
    //a pedido del tutor


  }
  onToCreate(e:any){
    this.router.navigate(['alumnos/agregar']);
    this.dataenviada=e;
    
  }

}
