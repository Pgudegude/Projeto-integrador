import { EnderecoService } from './endereco.service';
import { Cliente } from '../components/models/cliente';
import { Endereco } from '../components/models/endereco';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient, private httpAddress : EnderecoService) { }


  clienteBanco = (cliente: Cliente) => {
    return {
      "name": cliente.nomeCompleto,
      "cpf": cliente.cpf,
      "birthDate": cliente.dataDeNascimento,
      "mail": cliente.email,
      "phone": cliente.telefone,
      "password": cliente.senha
    }

  }
  

  public insertCliente(cliente: Cliente, endereco:Endereco) {
    let client = this.clienteBanco(cliente)
    let address = this.httpAddress.enderecoBanco(endereco)
    let comunicacao = {client,address}
    let url = this.http.post<any>("http://localhost:8080/ecommerce/create-client-address", comunicacao);
    return url.pipe(map(
      dados => dados
    ));
  }
}
