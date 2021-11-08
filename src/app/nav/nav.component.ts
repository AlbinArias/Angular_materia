import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../SERVICES/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router, private loginservice:LoginService) {}

  Oninicio(){
    this.router.navigate([""])
  }

  Onpersona(){
    this.router.navigate(["personas"])
  }

  Oncurso(){
    this.router.navigate(["cursos"])
  }

  Oncursodocente(){
    this.router.navigate(["curso-docente"])
  }
  Oncursoestudiante(){
    this.router.navigate(["curso-estudiante"])
  }
  Onestudiante(){
    this.router.navigate(["estudiantes"])
  }

  Ondocente(){
    this.router.navigate(["docentes"])
  }
  Oningresar(){
    this.loginservice.logout();
    this.router.navigate(["login"])
  }
  Onlogin(){
    this.router.navigate(["login"])
  }

  logedIn(){
    return this.loginservice.logedIn()
  }

}
