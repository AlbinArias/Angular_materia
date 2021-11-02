import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TablaestudiantesItem } from '../tablaestudiantes/tablaestudiantes-datasource';

@Injectable({
  providedIn: 'root'
})
export class ServiceestudianteService {
 
  url='https://gentle-bastion-60030.herokuapp.com/estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<TablaestudiantesItem[]>{
    return this.http.get<TablaestudiantesItem[]>(this.url)
  }


  getunEstudiante(id:string){
    return this.http.get<Estudiante[]>(this.url+'/'+id);
   
  }

  addEstudiantes(Estudiante:Estudiante){
    return this.http.post(this.url, Estudiante);
  }
  
  updateEstudiantes(id:string, Estudiante:Estudiante){
    this.http.put(this.url+'/'+id, Estudiante).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  deleteEstudiantes(id:string){
    this.http.delete(this.url+'/'+id).subscribe(
      res=>console.log(res),
          err=>alert(err(""))
    )
      }

}
export interface Estudiante{
  id?:any;
  id_persona: string;
  fecha_ingreso: string;
  carnet: string;
  statuss: string;
}
