import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceestudianteService, Estudiante } from '../SERVICES/serviceestudiante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formestudiantes',
  templateUrl: './formestudiantes.component.html',
  styleUrls: ['./formestudiantes.component.css']
})
export class FormestudiantesComponent implements OnInit {

  Estudiante: Estudiante= {
    id:'',
    id_persona:'',
    fecha_ingreso:'',
    carnet:'',
    statuss:''
  }

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    status: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  constructor(private fb: FormBuilder, private serviceestudiante:ServiceestudianteService, private router:Router, private activate: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.Estudiante.id=this.activate.snapshot.params['id'];
    if (this.Estudiante.id) {
      this.serviceestudiante.getunEstudiante(this.Estudiante.id).subscribe(
        res=>{
            let Estudiante=res[0];
            this.Estudiante.id_persona=Estudiante.id_persona
            this.Estudiante.fecha_ingreso=Estudiante.fecha_ingreso
            this.Estudiante.carnet=Estudiante.carnet
            this.Estudiante.statuss=Estudiante.statuss
        },
        err=>console.log(err)
      )
    } 
  }

  onSubmit(): void {
    alert('Guardado Correctamente');
  }
   
  agregar(){
   
    if (this.Estudiante.id) {
      this.Estudiante.id=this.Estudiante.id
      this.router.navigate(['estudiantes']);
      this.serviceestudiante.updateEstudiantes(this.Estudiante.id, this.Estudiante)
      alert('Actualizado Correctamente');
    } else {
      this.serviceestudiante.addEstudiantes(this.Estudiante).subscribe();
      this.router.navigate(['estudiantes']);
      alert('Guardado Correctamente');
    }
  }

  Oneliminar(id: string) {
    if(confirm("Esta Seguro de eliminar el id: "+id)) {
      this.serviceestudiante.deleteEstudiantes(this.Estudiante.id)
      this.router.navigate(["estudiantes"])
    }
    else{
      this.router.navigate(["estudiantes"])
    }
  }


  Onestudiante(){
    this.router.navigate(["estudiantestabla"])
  }
}
