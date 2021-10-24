import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FormdocenteComponent } from './formdocente/formdocente.component';
import { FormestudiantesComponent } from './formestudiantes/formestudiantes.component';
import { FormpersonaComponent } from './formpersona/formpersona.component';
import { NavComponent } from './nav/nav.component';
import { TabladocenteComponent } from './tabladocente/tabladocente.component';
import { TablaestudiantesComponent } from './tablaestudiantes/tablaestudiantes.component';
import { TablapersonaComponent } from './tablapersona/tablapersona.component';

const routes: Routes = [
  {path: '',component:BienvenidaComponent},
  {path: 'personas',component:FormpersonaComponent},
  {path: 'estudiantes',component:FormestudiantesComponent},
  {path: 'docentes',component:FormdocenteComponent},
  {path: 'personastabla',component:TablapersonaComponent},
  {path: 'estudiantestabla',component:TablaestudiantesComponent},
  {path: 'docentestabla',component:TabladocenteComponent},
  {path: 'docentes/:id',component:FormdocenteComponent},
  {path: 'estudiantes/:id',component:FormestudiantesComponent},
  {path: 'personas/:id',component:FormpersonaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
