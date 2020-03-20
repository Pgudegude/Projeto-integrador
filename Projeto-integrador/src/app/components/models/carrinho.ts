import { apiProduct } from './apiProduct';

export class Carrinho{
    constructor(public produto: apiProduct, public quantidade: number = 1){}
}