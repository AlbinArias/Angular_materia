import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { ServicepersonaService, Persona } from '../SERVICES/servicepersona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formpersona',
  templateUrl: './formpersona.component.html',
  styleUrls: ['./formpersona.component.css']
})
export class FormpersonaComponent implements OnInit{

  Persona: Persona= {
    id:'',
    nombre:'',
    apellido:'',
    fecha_nacimiento:'',
    Direccion:''
  }

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    direccion: [null, Validators.required],
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

  constructor(private fb: FormBuilder, private PersonaService:ServicepersonaService, private router:Router, private activate: ActivatedRoute) {}

  ngOnInit(): void {
    this.Persona.id=this.activate.snapshot.params['id'];
    if (this.Persona.id) {
      this.PersonaService.getunPersona(this.Persona.id).subscribe(
        res=>{
            let Docente=res[0];
            this.Persona.nombre=Docente.nombre;
            this.Persona.apellido=Docente.apellido;
            this.Persona.fecha_nacimiento=Docente.fecha_nacimiento;
            this.Persona.Direccion=Docente.Direccion
        },
        err=>console.log(err)
      )
    } 
  }


  onSubmit(): void {
    alert('Guardado Correctamente');
  }

  agregar(){
    if (this.Persona.id) {
      this.Persona.id=this.Persona.id
      this.router.navigate(['personas']);
      this.PersonaService.updatePersona(this.Persona.id, this.Persona)
      alert('Actualizado Correctamente');
    } else {
      this.router.navigate(['personas']);
      this.PersonaService.addPersona(this.Persona).subscribe();
      this.router.navigate(['personas']);
      alert('Guardado Correctamente');
    }
    this.router.navigate(['personas']);
  }
   
  Oneliminar(id: string) {
    if(confirm("Esta Seguro de eliminar la persona: "+id)) {
      this.PersonaService.deletePersona(this.Persona.id)
      this.router.navigate(["personas"])
    }
    else{
      this.router.navigate(["personas"])
    }
  }
  
  Onpersona(){
    this.router.navigate(["personastabla"])
    
  }
}
