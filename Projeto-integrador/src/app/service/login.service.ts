import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../components/models/cliente';
import { Login } from '../components/models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  dado(login:Login){
    return{
    
      "password":login.password
    }

  }

  fazerLogin(login:Login){
    let comunicacao = this.dado(login)
   let body:any
   let url = this.http.post(`http://localhost:8080/ecommerce/login/${login.mail}/${login.password}`,comunicacao)
   return url.pipe(data=>data)
  }
}
