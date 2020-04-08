import { Category } from './category';

export class apiProduct{
    constructor(
    public codProduct?: number,
    public description?: string,
    public name?: string,
    public image?: string,
    public category?:Category,
    public valueProduct?: number,
    public valueDiscount?: number,
    public brand?: string,
    public model?: string,){}
}