

export interface Product {
    name: string;
    description: string
    imageurl: string
    id: number
    cost: string
}


export type CartItem = {
    id: string,
    name: string,
    cost: number,
    imageURL: string
}