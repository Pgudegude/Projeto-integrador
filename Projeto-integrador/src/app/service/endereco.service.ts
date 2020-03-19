import { Injectable } from '@angular/core';
import  {  HttpClient  }  from  "@angular/common/http" ;
import { Endereco } from '../components/models/endereco';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }


  
  enderecoBanco = (endereco:Endereco) =>{
    console.log(endereco);
    return {
      "zipCode": endereco.cep,
      "logradouro": endereco.endereco,
      "neighborhood": endereco.bairro,
      "state": endereco.estado,
      "city": endereco.cidade,
      "number": endereco.numero,
      "complement":endereco.complemento
    }
  }

  public insertEndereco(endereco: Endereco){
    let comunicacao = this.enderecoBanco(endereco)
        let url = this.http.post<any>("http://localhost:8080/ecommerce/create-address", comunicacao);
        return url.pipe(map(
          dados => dados
        ));
      }
    }

