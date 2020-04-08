import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../components/models/Pedido';
import { map } from 'rxjs/operators';
import { EnderecoService } from './endereco.service';
import { Carrinho } from '../components/models/carrinho';
import { Cliente } from '../components/models/cliente';
import { Endereco } from '../components/models/endereco';
import { CadastroService } from './cadastro.service';



function adaptar(data:any[]) {
  return data.map(
    elem => new Pedido(elem.price, 
      elem.priceFreight,
       elem.statusRequest,
       elem.date, 
      elem.client, 
      elem.payment,
      elem.name,
      elem.phone,
      elem.address,
       elem.id
    )
  )
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient, private httpAddress: EnderecoService, private httpCadastro: CadastroService) { }

  adaptador2 = (pedido: Pedido) => {
    return {  
      "price": pedido.price,
      "priceFreight": pedido.priceFreight,
      "statusRequest": pedido.statusRequest,
      "date": pedido.date,
      "client": pedido.client,
      "payment": pedido.payment,
      "name": pedido.name,
      "phone": pedido.phone,
      "address": this.httpAddress.enderecoBanco(pedido.address)
    }

  }

  
  public envPedido(pedido: Pedido) {
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
      let url = this.http.post('http://localhost:8080/ecommerce/create-itemcart',comunicacao)
       url.pipe(
        map(
          dados=>dados     
        )
      ).subscribe(
        elemento=>{
          elemento
        }
      )
    }
  }

  acompanhar() {
    let cliente =JSON.parse(atob(sessionStorage.getItem("usuario")))
    console.log(cliente)
    let url = this.http.post(`http://localhost:8080/ecommerce/acompanhar`, cliente)
    return url.pipe(
      map(adaptar
))
  }
  
}
