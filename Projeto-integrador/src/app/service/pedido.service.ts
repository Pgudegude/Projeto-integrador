import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../components/models/Pedido';
import { map } from 'rxjs/operators';
import { EnderecoService } from './endereco.service';


function adaptar(data: any[]) {
  return data.map(
    elem => new Pedido(elem.id, elem.price, elem.priceFreight, elem.statusRequest, elem.date, elem.client, elem.payment)
  )
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient, private httpAddress:EnderecoService) { }

  adaptador2 = (pedido : Pedido) => {
    return {
       " price" : pedido.price,
       "priceFreight": pedido.priceFreight,
       "statusRequest":pedido.statusRequest,
       "date":pedido.date,       
       "client":pedido.client,
       "payment":pedido.payment,
       "name":pedido.name,
       "phone":pedido.phone,
       "address": this.httpAddress.enderecoBanco(pedido.address)
    }

  }

  sendRequest(){
    let carrinho = JSON.parse(localStorage.getItem('cartProduct'))
    let url = this.http.post('http://localhost:8080/ecommerce/request',carrinho)
    return url.pipe(
      map(adaptar
      ))
  }
  public envPedido(pedido : Pedido) {
    let comunicacao = this.adaptador2(pedido)
    let url = this.http.post('http://localhost:8080/ecommerce/request',comunicacao);
    return url.pipe(map(
      dados => dados
    ));
  }

  acompanhar() {
    let cliente = JSON.parse(localStorage.getItem("usuario"))
    let url = this.http.post(`http://localhost:8080/ecommerce/acompanhar`, cliente)
    return url.pipe(
      map(adaptar

      ))
  }
}
