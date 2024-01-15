export interface User{
    firstName:string
    lastName: string
}

export enum Cost{
    Budget=1,
    Reasonable=2,
    Fancy=3
}

export interface Restaurant{
    name:string
    googleMapsURL:string
    cost:Cost
    foodType: string
    menuUrl?:string
}

export interface Event {
    name: string;
    description: string
    imageURL: string
    organizer: User
    restaurant: Restaurant
    slug:string
    numPeople:number
}