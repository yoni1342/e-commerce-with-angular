export class Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.imageUrl = '';
        this.description = '';
    }

}

export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'Nike', imageUrl: '../../assets/nike.jpeg', price:9,  description: "Test "},
    { id: 2, name: 'Puma', imageUrl: '../../assets/puma.jpg', price:29,  description: "Test "},
    { id: 3, name: 'Skechers', imageUrl: '../../assets/vans.jpeg' , price:29,  description: "Test "}
];
