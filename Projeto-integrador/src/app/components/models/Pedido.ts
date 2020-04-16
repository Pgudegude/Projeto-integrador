import { Cliente } from "./cliente";
import { Pagamento } from './Pagamento';
import { Endereco } from './endereco';
import { StatusRequest } from './StatusRequest';

export class Pedido {

    constructor(
        public price?: Number,
        public priceFreight?: Number,
        public date?: Date,
        public client?: Cliente,
        public payment?: Pagamento,
        public name?: String,
        public phone?: String,
        public address?: Endereco,
        public statusRequest?: StatusRequest[],
        public id?: Number
    ) {
    }
}