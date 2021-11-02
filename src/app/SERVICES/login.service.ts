import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://gentle-bastion-60030.herokuapp.com/';
  constructor(private http: HttpClient) { }

  login(user:any){
return this.http.post<any>(this.url+ 'login', user)
  }
  logout(){
    localStorage.removeItem('token')
  }
  logedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}


