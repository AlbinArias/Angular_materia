import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablapersonaDataSource, TablapersonaItem } from './tablapersona-datasource';
import { ServicepersonaService } from '../SERVICES/servicepersona.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablapersona',
  templateUrl: './tablapersona.component.html',
  styleUrls: ['./tablapersona.component.css']
})
export class TablapersonaComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablapersonaItem>;
  dataSource: TablapersonaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'apellido', 'fecha_nacimiento', 'Direccion'];

  constructor(private personaservice:ServicepersonaService, private router:Router) {
    this.dataSource = new TablapersonaDataSource();
  }
  
  ngOnInit():void{
    this.dataSource = new TablapersonaDataSource();
    this.personaservice.getPersonas().subscribe(
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

  Onpersona(){
    this.router.navigate(["personas"])
  }
}
