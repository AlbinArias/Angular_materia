import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../SERVICES/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    userName:'',
    password:''
  }
  constructor(private servicelgin:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

onLogin(){
this.servicelgin.login(this.user).subscribe(
  (res)=>{
    localStorage.setItem('token', res.token)
    this.router.navigate(["personas"])
  }
)
}
}
