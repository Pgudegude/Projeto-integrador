import { Injectable } from '@angular/core';
import  {  HttpClient  }  from  "@angular/common/http" ;
import { map } from "rxjs/operators";
import { Produtos } from "../components/models/produtos";

const urlAPI: string = '....'

function AdaptadorDeProduto(data: any[]) {
  return data.map(
    elem => new Produtos(elem.COD_PRODUTO, elem.DESC, elem.REG_ANVISA, elem.FL_CONTROLADO, elem.COD_GRUPO)
  )
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProdutos() {
    let prod = this.http.get(`${urlAPI}/produtos`)

//     return prod.pipe(
//       map(AdaptadorDeProduto
//         // (data: any[]) => {
//         //   return data.map(elem => {
//         //     return new Produto(elem.COD_PRODUTO, elem.DESC, elem.REG_ANVISA, elem.FL_CONTROLADO, 1)
//         //   })
//         // }
//       )
//     )
//   }

//   addProduto(p: Produtos) {
//     let produtoParaEnviar = {
//       COD_PRODUTO: p.code, 
//       DESC: p.desc, 
//       REG_ANVISA: p.reg_anvisa,
//       FL_CONTROLADO: p.controlado, 
//       COD_GRUPO: p.cod_grupo
//     }

//     return this.http.post(`${urlAPI}/produtos`, produtoParaEnviar)
//   }
// }


