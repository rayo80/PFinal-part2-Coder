import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscripcionesService } from '../inscripciones.service';


@Component({
  selector: 'app-inscripciones-form',
  templateUrl: './inscripciones-form.component.html',
  styleUrls: ['./inscripciones-form.component.scss']
})
export class InscripcionesFormComponent implements OnInit {

  constructor(private fbuild:FormBuilder, private inscripcionesService:InscripcionesService) { }
  formInscripciones:FormGroup;
  inscripcionToEdit:any; //inscripcion a ser editado
  error=false;
  index: any;
  ngOnInit(): void {
    this.formInscripciones = this.fbuild.group({
      alumno: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
    })
  }

  onSubmit(){
    
    if((this.formInscripciones.status != 'INVALID')){  
        let inscripciones=[];
        let id;
        this.inscripcionesService.getActualIndex().subscribe(
          val=>this.index=val
        )
        this.inscripcionesService.getInscripcionesList().subscribe(
          val=>inscripciones = val
        )
        
        if(inscripciones.length>0 && !this.inscripcionToEdit ){
          //traemos el id
          id=this.index+1;
          this.formInscripciones.value['id'] = id;
          inscripciones.push(this.formInscripciones.value)

        }
        this.inscripcionesService.inscripcioneslist=inscripciones!
        this.inscripcionesService.index=id;
    }else{
      this.error=true;
    }
  }
}
