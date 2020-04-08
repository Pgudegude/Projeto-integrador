import { Injectable } from '@angular/core';
import  {  HttpClient  }  from  "@angular/common/http" ;
import { Endereco } from '../components/models/endereco';
import { map } from 'rxjs/operators';
import { Cliente } from '../components/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  enderecoBanco = (endereco:Endereco) =>{
    return {
      "zipCode": endereco._cep,
      "logradouro": endereco._endereco,
      "neighborhood": endereco._bairro,
      "state": endereco._estado,
      "city": endereco._cidade,
      "number": endereco._numero,
      "complement":endereco._complemento,
      "idAddress":endereco._id
    }
  }


  public insertEndereco(endereco: Endereco, cliente: Cliente){
    let comunicacao = this.enderecoBanco(endereco)
        let url = this.http.post<any>(`http://localhost:8080/ecommerce/create-address/${cliente.id}`, comunicacao);
        return url.pipe(map(
          dados => dados
        ));
      }
    }

