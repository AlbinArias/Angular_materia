import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CursoEstudianteService, Curso_Estudiante } from '../SERVICES/curso-estudiante.service';

@Component({
  selector: 'app-formcurso-estudiante',
  templateUrl: './formcurso-estudiante.component.html',
  styleUrls: ['./formcurso-estudiante.component.css']
})
export class FormcursoEstudianteComponent {

  Curso: Curso_Estudiante= {
    id:'',
    id_estudiante:'',
    id_curso:'',
    status:'',
    fecha_inicio:'',
    fecha_fin:''
    }

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    direccion: [null, Validators.required],
    direccion1: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private servicecurso:CursoEstudianteService, private router:Router, private activate: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.Curso.id=this.activate.snapshot.params['id'];
    if (this.Curso.id) {
      this.servicecurso.getunCursoEstudiante(this.Curso.id).subscribe(
        res=>{
          
            let Docente=res[0];
            this.Curso.id=Docente.id;
            this.Curso.id_estudiante=Docente.id_estudiante
            this.Curso.id_curso=Docente.id_curso
            this.Curso.status=Docente.status
            this.Curso.fecha_inicio=Docente.fecha_inicio
            this.Curso.fecha_fin=Docente.fecha_fin
        },
        
        err=>console.log(err)
      )
    } 
  }

  onSubmit(): void {
    alert('Guardado Correctamente');
  }

  
  agregar(){
  
    if (this.Curso.id) {
      this.Curso.id=this.Curso.id
      this.router.navigate(['curso-estudiante']);
      this.servicecurso.updateCursoEstudiante(this.Curso.id, this.Curso)
      alert('Actualizado Correctamente');
    } else {
      this.servicecurso.addCursoEstudiante(this.Curso).subscribe();
      alert('Guardado Correctamente');
      this.router.navigate(['curso-estudiante']);
    }
   
  }

  Onpersona(){
    this.router.navigate(["curso-estudiantetabla"])
  }

  Oneliminar(id: string) {
    if(confirm("Esta Seguro de eliminar: "+id)) {
      this.servicecurso.deleteCursoEstudiante(this.Curso.id)
      this.router.navigate(["curso-estudiante"])
    }
    else{
      this.router.navigate(["curso-estudiante"])
    }
  }

   
}
