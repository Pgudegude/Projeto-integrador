import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { LoginService } from 'src/app/service/login.service';
import { Login } from '../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;


constructor(private fb: FormBuilder, private http: LoginService) { }




ngOnInit(): void {
  this.criarFormularioDeLogin()
}

criarFormularioDeLogin(){
  this.formularioLogin = this.fb.group(
    {
      email:["",
      Validators.compose([
        Validators.email,
        Validators.required
      ])],
      senha:['']
    }
  )

}

logar(){
  
  let user: Login = new Login()
  user.mail=this.formularioLogin.value.email;
  user.password=this.formularioLogin.value.senha;
  console.log(user.password)
  console.log(user.mail)
    this.http.fazerLogin(user).subscribe(data=>{
      console.log(data)
    })
    alert ("Você está logado")
  }
}