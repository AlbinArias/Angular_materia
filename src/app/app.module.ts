import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormpersonaComponent } from './formpersona/formpersona.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TablapersonaComponent } from './tablapersona/tablapersona.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import{HttpClientModule} from '@angular/common/http';
import { FormestudiantesComponent } from './formestudiantes/formestudiantes.component';
import { TablaestudiantesComponent } from './tablaestudiantes/tablaestudiantes.component';
import { FormdocenteComponent } from './formdocente/formdocente.component';
import { TabladocenteComponent } from './tabladocente/tabladocente.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormpersonaComponent,
    TablapersonaComponent,
    FormestudiantesComponent,
    TablaestudiantesComponent,
    FormdocenteComponent,
    TabladocenteComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
