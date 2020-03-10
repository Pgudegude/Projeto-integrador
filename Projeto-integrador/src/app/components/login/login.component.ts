import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;


constructor(private fb: FormBuilder) { }

logar(){
  alert ("Você está logado")
}

ngOnInit(): void {
  this.criarFormularioDeLogin()
}

criarFormularioDeLogin(){
  this.formularioLogin = this.fb.group(
    {
      email:[''], 
      senha:['']
    }
  )

}
}
