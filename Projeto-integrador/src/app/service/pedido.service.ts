import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PedidoService {
  constructor(private http: HttpClient) { }
  acompanhar(){
   let cliente = JSON.parse(localStorage.getItem("usuario"))
   let url = this.http.post(`http://localhost:8080/ecommerce/acompanhar`,cliente)
   return url
  }
}
