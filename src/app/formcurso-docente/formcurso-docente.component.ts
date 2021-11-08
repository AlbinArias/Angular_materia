import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CursoDocenteService, Curso_Docente } from '../SERVICES/curso-docente.service';

@Component({
  selector: 'app-formcurso-docente',
  templateUrl: './formcurso-docente.component.html',
  styleUrls: ['./formcurso-docente.component.css']
})
export class FormcursoDocenteComponent {

Curso: Curso_Docente= {
  id:'',
  id_docente:'',
  id_curso:'',
  stauts:'',
  fecha_inicio:'',
  fecha_fin:''
  }

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    direccion: [null, Validators.required],
    direccion1: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private servicecurso:CursoDocenteService, private router:Router, private activate: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.Curso.id=this.activate.snapshot.params['id'];
    if (this.Curso.id) {
      this.servicecurso.getunCursodocente(this.Curso.id).subscribe(
        res=>{
          
            let Docente=res[0];
            this.Curso.id=Docente.id;
            this.Curso.id_docente=Docente.id_docente
            this.Curso.id_curso=Docente.id_curso
            this.Curso.stauts=Docente.stauts
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
      this.router.navigate(['curso-docente']);
      this.servicecurso.updateCursodocente(this.Curso.id, this.Curso)
      alert('Actualizado Correctamente');
    } else {
      this.servicecurso.addCursodocente(this.Curso).subscribe();
      alert('Guardado Correctamente');
      this.router.navigate(['curso-docente']);
    }
   
  }

  Onpersona(){
    this.router.navigate(["curso-docentetabla"])
  }

  Oneliminar(id: string) {
    if(confirm("Esta Seguro de eliminar: "+id)) {
      this.servicecurso.deleteCursodocente(this.Curso.id)
      this.router.navigate(["curso-docente"])
    }
    else{
      this.router.navigate(["curso-docente"])
    }
  }

   
}
