import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
