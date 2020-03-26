import { Cliente } from "./cliente";
import { Pagamento } from './Pagamento';

export class Pedido{
    constructor(
   public id?: Number,
   public  price?:Number,
   public priceFreight?:Number,
   public statusRequest?: String,
   public date?: Date,
   public client? : Cliente,
   public payment?: Pagamento,
    ){
    }
}