import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TabladocenteItem } from '../tabladocente/tabladocente-datasource';

@Injectable({
  providedIn: 'root'
})
export class ServicedocenteService {

  url='https://gentle-bastion-60030.herokuapp.com/maestros';

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<TabladocenteItem[]>{
    return this.http.get<TabladocenteItem[]>(this.url)
  }

  getunDocente(id:string){
    return this.http.get<Docente[]>(this.url+'/'+id);
  }

  addDocentes(Docente:Docente){
    return this.http.post(this.url, Docente);
  }

  updateDocentes(id:string, Docente:Docente){
    this.http.put(this.url+'/'+id, Docente).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  deleteDocentes(id:string){
    this.http.delete(this.url+'/'+id).subscribe(
      res=>console.log(res),
          err=>alert(err(""))
    )
      }
 

}
export interface Docente{
  id?:any;
  id_persona: string;
  fecha_ingreso: string;
}
