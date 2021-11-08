import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CursoDocenteDataSource, CursoDocenteItem } from './curso-docente-datasource';
import { CursoDocenteService } from '../SERVICES/curso-docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-docente',
  templateUrl: './curso-docente.component.html',
  styleUrls: ['./curso-docente.component.css']
})
export class CursoDocenteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CursoDocenteItem>;
  dataSource: CursoDocenteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', "nombre","apellido", "nombres", "stauts", "fecha_inicio", "fecha_fin"];

  constructor(private servicecurso:CursoDocenteService, private router:Router) {
    this.dataSource = new CursoDocenteDataSource();
  }

  ngOnInit(){
    this.dataSource = new CursoDocenteDataSource();
    this.servicecurso.getCursosdocente().subscribe(
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
    this.router.navigate(["curso-docente"])
  }
}
