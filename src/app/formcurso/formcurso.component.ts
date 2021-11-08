import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CursoService, Curso } from '../SERVICES/curso.service';

@Component({
  selector: 'app-formcurso',
  templateUrl: './formcurso.component.html',
  styleUrls: ['./formcurso.component.css']
})
export class FormcursoComponent {

  Curso: Curso= {
    id:'',
    nombres:'',
    descripcion:'',
  }

  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private servicecurso:CursoService, private router:Router, private activate: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.Curso.id=this.activate.snapshot.params['id'];
    if (this.Curso.id) {
      this.servicecurso.getunCurso(this.Curso.id).subscribe(
        res=>{
            let Docente=res[0];
            this.Curso.id=Docente.id;
            this.Curso.nombres=Docente.nombres
            this.Curso.descripcion=Docente.descripcion
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
      this.router.navigate(['cursos']);
      this.servicecurso.updateCurso(this.Curso.id, this.Curso)
      alert('Actualizado Correctamente');
    } else {
      this.servicecurso.addCurso(this.Curso).subscribe();
      alert('Guardado Correctamente');
      this.router.navigate(['cursos']);
    }
   
  }

  Onpersona(){
    this.router.navigate(["cursostabla"])
  }

  Oneliminar(id: string) {
    if(confirm("Esta Seguro de eliminar el id: "+id)) {
      this.servicecurso.deleteCurso(this.Curso.id)
      this.router.navigate(["cursos"])
    }
    else{
      this.router.navigate(["cursos"])
    }
  }

   
}
