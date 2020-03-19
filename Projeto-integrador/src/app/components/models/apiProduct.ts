export class apiProduct{
    public codProduct?: number;
    public description?: string;
    public name?: string;
    public image?: string;
    public category?:{
        id?: number,
        description?: string
    }
    public valueProduct?: number;
    public brand?: string;
    public model?: string;
}