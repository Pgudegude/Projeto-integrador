import { Pedido } from './Pedido';

export class StatusPedido{
    constructor(
       public pedido:Pedido,
       public quantidade:number
    ){

    }
}