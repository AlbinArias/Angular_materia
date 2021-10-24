import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabladocenteDataSource, TabladocenteItem } from './tabladocente-datasource';
import { ServicedocenteService, Docente } from '../SERVICES/servicedocente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabladocente',
  templateUrl: './tabladocente.component.html',
  styleUrls: ['./tabladocente.component.css']
})
export class TabladocenteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabladocenteItem>;
  dataSource: TabladocenteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id","fecha_ingreso","nombre","apellido","fecha_nacimiento","Direccion"];

  constructor(private servicedocente:ServicedocenteService, private router:Router) {
    this.dataSource = new TabladocenteDataSource();
  }

  ngOnInit(){
    this.dataSource = new TabladocenteDataSource();
    this.servicedocente.getDocentes().subscribe(
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
  
  Ondocente(){
    this.router.navigate(["docentes"])
  }
}
