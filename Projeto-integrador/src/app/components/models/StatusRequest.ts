import { Pedido } from './Pedido';

export class StatusRequest {
    constructor(
     public   idStatusRequest?:Number,
     public   date?:Date,
    public    statusRequest?:String,
    public request?:Pedido
    ){

    }
}
