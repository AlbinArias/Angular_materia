import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CursoDocenteComponent } from './curso-docente/curso-docente.component';
import { CursoEstudianteComponent } from './curso-estudiante/curso-estudiante.component';
import { CursoComponent } from './curso/curso.component';
import { FormcursoDocenteComponent } from './formcurso-docente/formcurso-docente.component';
import { FormcursoEstudianteComponent } from './formcurso-estudiante/formcurso-estudiante.component';
import { FormcursoComponent } from './formcurso/formcurso.component';
import { FormdocenteComponent } from './formdocente/formdocente.component';
import { FormestudiantesComponent } from './formestudiantes/formestudiantes.component';
import { FormpersonaComponent } from './formpersona/formpersona.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { TabladocenteComponent } from './tabladocente/tabladocente.component';
import { TablaestudiantesComponent } from './tablaestudiantes/tablaestudiantes.component';
import { TablapersonaComponent } from './tablapersona/tablapersona.component';

const routes: Routes = [
  {path: '',component:BienvenidaComponent},
  {path: 'personas',component:FormpersonaComponent, canActivate:[AuthGuard]},
  {path: 'estudiantes',component:FormestudiantesComponent, canActivate:[AuthGuard]},
  {path: 'docentes',component:FormdocenteComponent, canActivate:[AuthGuard]},

  {path: 'personastabla',component:TablapersonaComponent, canActivate:[AuthGuard]},
  {path: 'estudiantestabla',component:TablaestudiantesComponent, canActivate:[AuthGuard]},
  {path: 'docentestabla',component:TabladocenteComponent, canActivate:[AuthGuard]},

  {path: 'docentes/:id',component:FormdocenteComponent, canActivate:[AuthGuard]},
  {path: 'estudiantes/:id',component:FormestudiantesComponent, canActivate:[AuthGuard]},
  {path: 'personas/:id',component:FormpersonaComponent, canActivate:[AuthGuard]},
  {path: 'login',component:LoginComponent},

  {path: 'cursos',component:FormcursoComponent, canActivate:[AuthGuard]},
  {path: 'cursostabla',component:CursoComponent, canActivate:[AuthGuard]},
  {path: 'cursos/:id',component:FormcursoComponent, canActivate:[AuthGuard]},

  {path: 'curso-docente',component:FormcursoDocenteComponent, canActivate:[AuthGuard]},
  {path: 'curso-docentetabla',component:CursoDocenteComponent, canActivate:[AuthGuard]},
  {path: 'curso-docente/:id',component:FormcursoDocenteComponent, canActivate:[AuthGuard]},

  {path: 'curso-estudiante',component:FormcursoEstudianteComponent, canActivate:[AuthGuard]},
  {path: 'curso-estudiantetabla',component:CursoEstudianteComponent, canActivate:[AuthGuard]},
  {path: 'curso-estudiante/:id',component:FormcursoEstudianteComponent, canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
