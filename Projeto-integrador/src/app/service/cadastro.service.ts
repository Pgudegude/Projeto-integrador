import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../components/models/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  clienteBanco = (cliente: Cliente) => {
    console.log(cliente);
    return {
      "name ": cliente.nomeCompleto,
      "cpf": cliente.cpf,
      "birthDate": cliente.dataDeNascimento,
      "mail": cliente.email,
      "password": cliente.senha,
      "phone": cliente.telefone,
      }
  }

  public insertCliente(cliente: Cliente) {
    let comunicacao = this.clienteBanco(cliente)
    let url = this.http.post<any>("http://localhost:8080/ecommerce/create-client", comunicacao);
    return url.pipe(map(
      dados => dados
    ));
  }

}
