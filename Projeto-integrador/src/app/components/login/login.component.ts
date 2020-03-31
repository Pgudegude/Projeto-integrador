import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from 'src/app/service/login.service';
import { Login } from '../models/login.model';
import { HeaderComponent } from '../header/header.component';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
usuario: any

  constructor(private fb: FormBuilder, private http: LoginService, private http2: HttpService, private logar : HeaderComponent) { }

  login: boolean
  verificarLogin() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"))
    if (this.usuario == null) {
      this.login = false
      this.logar.verificarLogin()
    }
    else {
      this.login = true
      this.logar.verificarLogin()
    }
  }

  ngOnInit(): void {
    this.criarFormularioDeLogin()
    this.verificarLogin()
  }


  criarFormularioDeLogin() {
    this.formularioLogin = this.fb.group(
      {
        email: ["",
          Validators.compose([
            Validators.email,
            Validators.required
          ])],
        senha: ['']
      }
    )
  }


  logando() {
    let user: Login = new Login()
    user.mail = this.formularioLogin.value.email;
    user.password = this.formularioLogin.value.senha;
    this.http.fazerLogin(user).subscribe(data => {
      
      let login_json = JSON.stringify(data)
      localStorage.setItem("usuario", login_json)
      this.verificarLogin()
      location.reload()
    })  
  }


  deslogar() {
    localStorage.removeItem("usuario")
    this.verificarLogin()
    location.reload()

  }

}
