import productData from '../produt.json';
export class Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;

    constructor(){
        this.id = 0;
        this.title = '';
        this.price = 0;
        this.image = '';
        this.description = '';
        this.category = '';
    }

}

export const PRODUCTS = productData;
