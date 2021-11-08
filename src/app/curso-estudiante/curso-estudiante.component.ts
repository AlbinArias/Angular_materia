import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CursoEstudianteDataSource, CursoEstudianteItem } from './curso-estudiante-datasource';
import { Router } from '@angular/router';
import { CursoEstudianteService } from '../SERVICES/curso-estudiante.service';


@Component({
  selector: 'app-curso-estudiante',
  templateUrl: './curso-estudiante.component.html',
  styleUrls: ['./curso-estudiante.component.css']
})
export class CursoEstudianteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CursoEstudianteItem>;
  dataSource: CursoEstudianteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', "carnet","nombre", "apellido","nombres","status", "fecha_inicio", "fecha_fin"];

  constructor(private servicecurso:CursoEstudianteService, private router:Router) {
    this.dataSource = new CursoEstudianteDataSource();
  }

  ngOnInit(){
    this.dataSource = new CursoEstudianteDataSource();
    this.servicecurso.getCursosEstudiante().subscribe(
      res=>{
        this.dataSource.data=res;
        console.log(res)
      }
    )
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  Onestudiante(){
    this.router.navigate(["curso-estudiante"])
  }
}
