import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CursoItem } from '../curso/curso-datasource';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url='https://gentle-bastion-60030.herokuapp.com/cursos';

  constructor(private http: HttpClient) { }

  getCursos(): Observable<CursoItem[]>{
    return this.http.get<CursoItem[]>(this.url)
  }

  getunCurso(id:string){
    return this.http.get<Curso[]>(this.url+'/'+id);
  }

  addCurso(curso:Curso){
    return this.http.post(this.url, curso);
  }
  
  updateCurso(id:string, curso:Curso){
    this.http.put(this.url+'/'+id, curso).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  deleteCurso(id:string){
this.http.delete(this.url+'/'+id).subscribe(
  res=>console.log(res),
      err=>alert(err(""))
)
  }
 

}
export interface Curso{
  id?:any;
  nombres: string;
  descripcion: string;
}
