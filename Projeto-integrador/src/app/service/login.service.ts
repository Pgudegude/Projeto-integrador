import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../components/models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  dado(login:Login){
    return{
      "mail":login.mail,
      "password":login.password
    }

  }

  fazerLogin(login: Login) {
    let comunicacao = this.dado(login)
 
   let url = this.http.post(`http://localhost:8080/ecommerce/login`,comunicacao)
   return url.pipe(data=>data)
  }
}