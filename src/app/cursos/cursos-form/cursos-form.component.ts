import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from 'src/app/cursos/cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {
  formCursos:FormGroup;
  cursoToEdit:any; //cursoto Edit
  error = false
  index: any;
  @Output() VerForm= new EventEmitter<any>();
  constructor(   private fbuild: FormBuilder, private cursosService: CursosService,
    ) { }

  ngOnInit(): void {
    this.formCursos = this.fbuild.group({
      name: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      horario: ['', [Validators.required, ]],
    });
    //el alumno a editar no cambia asi que lo podemos traer rapidamente
    this.cursosService.getCursoToEdit().subscribe(
      val=>this.cursoToEdit=val
    )
    
    if(this.cursoToEdit){
      this.formCursos.get('name')?.patchValue(this.cursoToEdit.name);
      this.formCursos.get('codigo')?.patchValue(this.cursoToEdit.codigo);
      this.formCursos.get('horario')?.patchValue(this.cursoToEdit.horario);
    }
  }

  onSubmit(){
      if((this.formCursos.status != 'INVALID')){  
          let cursos=[];
          let id;
          //traemos la lista y el index actual
          this.cursosService.getActualIndex().subscribe(
            val=>this.index=val
          )
          this.cursosService.getCursosList().subscribe(
            val=>cursos = val
          )
          if(!this.cursoToEdit ){
            //traemos el id
            id=this.index+1;
            this.formCursos.value['id'] = id;
            cursos.push(this.formCursos.value)
          }
          if(this.cursoToEdit){
            let indexOfAlumnos=cursos.findIndex((al:any) => al.id===this.cursoToEdit.id);
            this.formCursos.value['id'] = indexOfAlumnos;
            cursos[indexOfAlumnos] = this.formCursos.value;
          }
          this.cursosService.cursoslist=cursos!
          this.cursosService.index=id;
          this.VerForm.emit(true);
        }
      else{
            console.log('error')
      }  
}
}