import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/alumnos/alumnos.service';
import { AlumnoSchema } from '../alumno.interface';

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
  localAlumnos:any =[];

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

    this.alumnosService.getAlumnosList().subscribe(
      val=>this.localAlumnos = val,
      ()=>console.log(this.localAlumnos)
    )
    
    console.log(this.localAlumnos)

    this.alumnosService.getActualIndex().subscribe(
      val=>this.index = val
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
        let id;
        
        if(this.localAlumnos.length >= 0 && !this.alumnoToEdit ){
          //traemos el id
          this.alumnosService.index = this.alumnosService.index+1;
          id = this.alumnosService.index
          this.formAlumnos.value['id'] = id;
          this.localAlumnos.push(this.formAlumnos.value)
        }

        if(this.alumnoToEdit){
          let indexOfAlumnos = this.localAlumnos.findIndex((al:any) => al.id===this.alumnoToEdit.id);
          this.formAlumnos.value['id'] = this.alumnoToEdit.id;
          // solo actualizamos la lista
          this.localAlumnos[indexOfAlumnos] = this.formAlumnos.value;
        }
        this.alumnosService.alumnoslist = this.localAlumnos!
        this.alumnosService.alumnoToEdit = null
        this.router.navigate(['alumnos/listar']);

    }else{
      this.error=true;
    }
  }

  
}
