import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/alumnos/alumnos.service';
import { AlumnoSchema } from '../../models/alumno.interface';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {
  formAlumnos:FormGroup;
  alumnoToEdit:any; //alumno a ser editado
  error=false
  index: any;
  @Output() itemAdded = new EventEmitter<any>(); 


  constructor(
    private fbuild: FormBuilder, private alumnosService: AlumnosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formAlumnos = this.fbuild.group({
      name: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad:['',[Validators.required, Validators.maxLength(2)]],
    });
    
    this.alumnosService.getAlumnoToEdit().subscribe(
      val=>this.alumnoToEdit=val
    )
    
    if(this.alumnoToEdit){
      this.formAlumnos.get('name')?.patchValue(this.alumnoToEdit.name);
      this.formAlumnos.get('apellidos')?.patchValue(this.alumnoToEdit.apellidos);
      this.formAlumnos.get('email')?.patchValue(this.alumnoToEdit.email);
      this.formAlumnos.get('edad')?.patchValue(this.alumnoToEdit.edad);
    }
  }

  onSubmit(){
    
    if((this.formAlumnos.status != 'INVALID')){  
        let localAlumnos=[];
        let id;
        this.alumnosService.getActualIndex().subscribe(
          val=>this.index=val
        )
        this.alumnosService.getAlumnosList().subscribe(
          val=>localAlumnos = val
        )
        
        if(localAlumnos.length>0 && !this.alumnoToEdit ){
          //traemos el id
          id=this.index+1;
          this.formAlumnos.value['id'] = id;
          localAlumnos.push(this.formAlumnos.value)

        }else if(localAlumnos.length===0 && !this.alumnoToEdit){
          id=this.index+1;
          this.formAlumnos.value['id'] = id;
          localAlumnos.push(this.formAlumnos.value)
        }
        if(this.alumnoToEdit){
          let indexOfAlumnos=localAlumnos.findIndex((al:any) => al.id===this.alumnoToEdit.id);
          this.formAlumnos.value['id'] = indexOfAlumnos;
          localAlumnos[indexOfAlumnos] = this.formAlumnos.value;
        }
        this.alumnosService.alumnoslist=localAlumnos!
        this.alumnosService.index=id;
        this.itemAdded.emit(true);

    }else{
      this.error=true;
    }
  }

  
}
