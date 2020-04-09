import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../components/models/Pedido';
import { map } from 'rxjs/operators';
import { EnderecoService } from './endereco.service';
import { Carrinho } from '../components/models/carrinho';
import { Cliente } from '../components/models/cliente';
import { Endereco } from '../components/models/endereco';
import { CadastroService } from './cadastro.service';
import { Detalhe } from '../components/models/detalhe';
import { StatusRequest } from '../components/models/StatusRequest';



function adaptar(data: any[]) {
  return data.map(
    elem => new Pedido(elem.price,
      elem.priceFreight,
      elem.date,
      elem.client,
      elem.payment,
      elem.name,
      elem.phone,
      elem.address,
      elem.statusRequest,
      elem.id
      
    )
  )
}
function adaptar3(data:any[]){
  return data.map(
    elem=> new Detalhe(elem.code,
      elem.valueProduct,
    elem.valueFreight,
    elem.amount, 
    elem.codProduct, 
    new Pedido(elem.request.price, elem.request.priceFreight, elem.request.statusRequest, elem.request.date
      ,elem.request.client, elem.request.payment, elem.request.name, elem.request.phone,
      elem.request.address, elem.request.id)
      )
  )
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient, private httpAddress: EnderecoService, private httpCadastro: CadastroService) { }

  adaptador2 = (pedido: StatusRequest) => {
    return {
      "date":pedido.date,
      "statusRequest":pedido.statusRequest,
      "request":{
      "price": pedido.request.price,
      "priceFreight": pedido.request.priceFreight,
      "statusRequest": pedido.request.statusRequest,
      "date": pedido.request.date,
      "client": pedido.request.client,
      "payment": pedido.request.payment,
      "name": pedido.request.name,
      "phone": pedido.request.phone,
      "address": this.httpAddress.enderecoBanco(pedido.request.address)}
    }

  }


  public envPedido(pedido: StatusRequest) {
    let comunicacao = this.adaptador2(pedido)
    console.log(comunicacao)
    let url = this.http.post('http://localhost:8080/ecommerce/request', comunicacao);
    return url;
  }

  public cadastroEndereco(client: Cliente, endereco:Endereco) {
    let address = this.httpAddress.enderecoBanco(endereco)
    let comunicacao = {client,address}
    let url = this.http.post<any>("http://localhost:8080/ecommerce/save-address", comunicacao);
    return url
  }
 
  public envItemCart(pedido:Pedido, carrinho : Carrinho []){
    for(let i=0; i<carrinho.length; i++){
      let comunicacao= {
        "codProduct":carrinho[i].produto, 
        "amount":carrinho[i].quantidade, 
        "valueFreight":pedido.priceFreight,
        "valueProduct":carrinho[i].produto.valueProduct,
        "request":pedido
      }
      let url = this.http.post('http://localhost:8080/ecommerce/create-itemcart', comunicacao)
      url.pipe(
        map(
          dados => dados
        )
      ).subscribe(
        elemento => {
          elemento
        }
      )
    }
  }

details(code: number){
  return this.http.get(`http://localhost:8080/ecommerce/find-itemcart/${code}`).pipe(
    map(adaptar3)
  )
  }

  acompanhar() {
    let cliente = JSON.parse(atob(sessionStorage.getItem("usuario")))
    let url = this.http.post(`http://localhost:8080/ecommerce/acompanhar`, cliente)
    
    return url.pipe(
      map(adaptar
      ))
  }

}
