export interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    img: string,
    rating: IRating
}

export interface IRating {
    rate: number,
    count: number
}