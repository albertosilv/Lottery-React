export interface GameProps{
    id:string,
    type: string,
    description:string,
    range: number,
    price: number,
    "max-number": number,
    color:string,
    "min-cart-value": number,
    selected:boolean
}
export interface Numbers{
    name:string,
    selected:boolean,
}
export interface Item{
    id:number,
    numbers:string,
    data:Date,
    type:GameProps
}
export interface User{
    id:string,
    name:string,
    email:string,
    token:string,
}

export interface ErrorProps{
    activated:Boolean,
    message:string
}