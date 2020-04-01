import { Cliente } from "./cliente";
import { Pagamento } from './Pagamento';
import { Endereco } from './endereco';

export class Pedido{
    
    constructor(
   public  price?:Number,
   public priceFreight?:Number,
   public statusRequest?: String,
   public date?: Date,
   public client? : Cliente,
   public payment?: Pagamento,
   public name?: String,
   public phone?: String,
   public address?:Endereco,
   public id?: Number,
    ){
    }
}