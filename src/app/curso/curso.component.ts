import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CursoDataSource, CursoItem } from './curso-datasource';
import { CursoService } from '../SERVICES/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CursoItem>;
  dataSource: CursoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id',  "nombres", "descripcion"];

  constructor(private servicecurso:CursoService, private router:Router) {
    this.dataSource = new CursoDataSource();
  }
  ngOnInit(){
    this.dataSource = new CursoDataSource();
    this.servicecurso.getCursos().subscribe(
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
    this.router.navigate(["cursos"])
  }
}
