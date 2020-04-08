import { apiProduct } from './apiProduct';
import { Pedido } from './Pedido';

export class Detalhe{
    constructor(
      public  code?: number,
      public  valueProduct?: number,
     public   valueFreight?: number,
     public   amount?: number,
     public   codProduct?: apiProduct,
     public   request?: Pedido,
    ){
    }
}