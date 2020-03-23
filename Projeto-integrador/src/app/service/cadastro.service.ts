import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../components/models/cliente';
import { map } from 'rxjs/operators';
import { Endereco } from '../components/models/endereco';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  clienteBanco = (cliente: Cliente) => {
    return {
      "name":cliente.nomeCompleto,
      "cpf":cliente.cpf,
      "birthDate":cliente.dataDeNascimento,
      "mail":cliente.email,
      "phone":cliente.telefone,
      "password":cliente.senha
      }
    
  }
  
  public idCLient = this.http.get(`http://localhost:8080/ecommerce/find-lastAddress`)
  public idAddress = this.http.get(`http://localhost:8080/ecommerce/find-lastClient`)
  public getClientAddress(){
    return { "client": {"idClient":this.idCLient },
             "address":{"idAddress":this.idAddress }
            }
 }
 

  public insertCliente(cliente: Cliente) {
    let comunicacao = this.clienteBanco(cliente)
    let url = this.http.post<any>("http://localhost:8080/ecommerce/create-client", comunicacao);
    return url.pipe(map(
      dados => dados
    ));
  }
  public insertClientAddress(){
    let comunicacao = this.getClientAddress()
    let url = this.http.post<any>("http://localhost:8080/ecommerce/create-client-address",comunicacao);
    return url.pipe(map(dados=>dados))
  }
}
