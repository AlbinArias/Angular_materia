import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TablapersonaItem } from '../tablapersona/tablapersona-datasource';

@Injectable({
  providedIn: 'root'
})
export class ServicepersonaService {
  
  url='http://localhost:3000/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<TablapersonaItem[]>{
    return this.http.get<TablapersonaItem[]>(this.url)
  }

  getunPersona(id:string){
    return this.http.get<Persona[]>(this.url+'/'+id);
  }

  addPersona(persona:Persona){
    return this.http.post(this.url, persona);
  }
  
  updatePersona(id:string, Persona:Persona){
    this.http.put(this.url+'/'+id, Persona).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  deletePersona(id:string){
this.http.delete(this.url+'/'+id).subscribe(
  res=>console.log(res),
      err=>alert(err(""))
)
  }
 

}
export interface Persona{
  id?:any;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  Direccion: string;
}
