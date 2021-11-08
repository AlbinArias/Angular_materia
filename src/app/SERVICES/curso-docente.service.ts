import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CursoDocenteItem } from '../curso-docente/curso-docente-datasource';

@Injectable({
  providedIn: 'root'
})
export class CursoDocenteService {

  url='https://gentle-bastion-60030.herokuapp.com/docente-curso';

  constructor(private http: HttpClient) { }

  getCursosdocente(): Observable<CursoDocenteItem[]>{
    return this.http.get<CursoDocenteItem[]>(this.url)
  }

  getunCursodocente(id:string){
    return this.http.get<Curso_Docente[]>(this.url+'/'+id);
  }

  addCursodocente(curso:Curso_Docente){
    return this.http.post(this.url, curso);
  }
  
  updateCursodocente(id:string, curso:Curso_Docente){
    this.http.put(this.url+'/'+id, curso).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  deleteCursodocente(id:string){
this.http.delete(this.url+'/'+id).subscribe(
  res=>console.log(res),
      err=>alert(err(""))
)
  }
 

}
export interface Curso_Docente{
  id?:any;
  id_docente: string;
  id_curso: string;
  stauts: string;
  fecha_inicio: string;
  fecha_fin: string;
}
