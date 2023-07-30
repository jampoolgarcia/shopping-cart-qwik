import { IProduct } from "~/interface";

export const getProducts = (async(): Promise<IProduct[]> => {
    const resp = await fetch(`https://fakestoreapi.com/products`);
    const data = await resp.json();

    return data;
})