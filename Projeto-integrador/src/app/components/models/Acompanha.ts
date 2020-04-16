import { Pedido } from './Pedido';

export class Acompanha{
    constructor(
        public pedido:Pedido,
        public number:number
    ){}
}