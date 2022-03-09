export class Customer{
    id: number;
    name: string;
    age: number;
    imageUrl: string;
    location: string;
    duration: number
    constructor(){
        this.id = 0;
        this.name = '';
        this.age = 0;
        this.imageUrl =''
        this.location =''
        this.duration = 0
    }
}

export const CUSTOMERS: Customer[] = [
    {id:1, name: 'Helen', age: 23, imageUrl:'../../assets/cast1.png', location: 'Ethiopia', duration: 3},
    {id:1, name: 'Helen', age: 23, imageUrl:'../../assets/cast1.png', location: 'Ethiopia', duration: 2},
    {id:2, name: 'Josi', age: 19, imageUrl:'../../assets/cust2.jpg', location: 'Ethiopia', duration: 1},
    {id:2, name: 'NaNi', age: 24, imageUrl:'https://i.pinimg.com/originals/f7/1e/3e/f71e3e88ac85fc3fed5d7d8a1b0d45ad.jpg', location: 'Ethiopia', duration:0}
]