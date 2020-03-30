import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Login } from '../components/models/login.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'dado' })
  // }
  dado(login: Login) {
    return {
      "mail": login.mail,
      "password": login.password
    }

  }

  fazerLogin(login: Login) {
    let comunicacao = this.dado(login)

   // let url = this.http.post(`http://localhost:8080/ecommerce/login`, comunicacao)
   return this.http.post(`http://localhost:8080/ecommerce/login`, comunicacao)
    .pipe(
      retry(2),
      
      catchError(this.handleError)
    )
    // return url.pipe(data => data)
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}