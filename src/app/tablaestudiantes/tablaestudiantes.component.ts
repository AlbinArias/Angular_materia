import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaestudiantesDataSource, TablaestudiantesItem } from './tablaestudiantes-datasource';
import { ServiceestudianteService } from '../SERVICES/serviceestudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaestudiantes',
  templateUrl: './tablaestudiantes.component.html',
  styleUrls: ['./tablaestudiantes.component.css']
})
export class TablaestudiantesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaestudiantesItem>;
  dataSource: TablaestudiantesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ "id","fecha_ingreso","carnet","statuss","nombre","apellido","fecha_nacimiento","Direccion"];

  constructor(private serviceestudiante:ServiceestudianteService, private router:Router) {
    this.dataSource = new TablaestudiantesDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaestudiantesDataSource();
    this.serviceestudiante.getEstudiantes().subscribe(
      res=>{
        this.dataSource.data=res;
      }
    )
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  Onestudiante(){
    this.router.navigate(["estudiantes"])
  }
}
