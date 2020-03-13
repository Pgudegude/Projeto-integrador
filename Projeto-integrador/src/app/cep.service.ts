import { Injectable } from '@angular/core';
import  {  HttpClient  }  from  "@angular/common/http" ;
import { retry } from "rxjs/operators";
import { Endereco } from '../app/components/models/Endereco';
import { Observable } from 'rxjs';

const urlAPI: string = 'http://viacep.com.br/ws/';

interface viacep{
  cep:string,
  logradouro: string,
  bairro: string,
  uf: string,
  localidade: string
}

@Injectable({
  providedIn: 'root'
})


export class CepService {

  constructor(private http: HttpClient) { }

  getCep(endereco: Endereco): Observable<viacep>{

    return this.http.get<viacep>(urlAPI+endereco.cep+"/json/").pipe(retry(2));

  }




}