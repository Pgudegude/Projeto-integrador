import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Cep } from './components/cep/cep/cep';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:HttpClient) { }
  buscar(cep:string){
    this.http.get(`viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then(response=>{
        this.converteResposta(response.json());
      }
       
      )}
 
      private converteResposta (cepResposta):Cep{
        let cep = new Cep();
        cep.cep=cepResposta.cep;
        cep.endereco=cepResposta.endereco;
        cep.bairro=cepResposta.bairro;
        cep.cidade=cepResposta.cidade;
        cep.estado=cepResposta.uf;
        return cep;
      }

  }

