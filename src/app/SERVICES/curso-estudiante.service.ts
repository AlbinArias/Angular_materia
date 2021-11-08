import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CursoEstudianteItem } from '../curso-estudiante/curso-estudiante-datasource';

@Injectable({
  providedIn: 'root'
})
export class CursoEstudianteService {

  url='https://gentle-bastion-60030.herokuapp.com/estudiante-curso';

  constructor(private http: HttpClient) { }

  getCursosEstudiante(): Observable<CursoEstudianteItem[]>{
    return this.http.get<CursoEstudianteItem[]>(this.url)
  }

  getunCursoEstudiante(id:string){
    return this.http.get<Curso_Estudiante[]>(this.url+'/'+id);
  }

  addCursoEstudiante(curso:Curso_Estudiante){
    return this.http.post(this.url, curso);
  }
  
  updateCursoEstudiante(id:string, curso:Curso_Estudiante){
    this.http.put(this.url+'/'+id, curso).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  deleteCursoEstudiante(id:string){
this.http.delete(this.url+'/'+id).subscribe(
  res=>console.log(res),
      err=>alert(err(""))
)
  }
 

}
export interface Curso_Estudiante{
  id?:any;
  id_estudiante: string;
  id_curso: string;
  status: string;
  fecha_inicio: string;
  fecha_fin: string;
}
