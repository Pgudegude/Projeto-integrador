import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../components/models/Pedido';
import { map } from 'rxjs/operators';


function adaptar(data: any[]){
  return data.map(
     elem => new Pedido(elem.id, elem.price, elem.priceFreight, elem.statusRequest, elem.date, elem.client, elem.payment)
   )
 }

 @Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient) { }



  acompanhar(){
   let cliente = JSON.parse(localStorage.getItem("usuario"))
   let url = this.http.post(`http://localhost:8080/ecommerce/acompanhar`,cliente)
   return url.pipe(
     map(adaptar

   ))
  }
}
