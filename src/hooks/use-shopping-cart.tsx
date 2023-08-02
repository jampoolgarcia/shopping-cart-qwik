import { useComputed$, useSignal } from "@builder.io/qwik";
import { IProduct } from "~/interface";



export const useShoppingCart = () =>{

    const cartItem = useSignal<IProduct[]>([]);
    const subTotal = useComputed$(() => (cartItem.value.reduce((prev: any, curr) => prev + curr.price, 0)));
    const totalItems = useComputed$(() => cartItem.value.length);

    const addProduct = (p: IProduct) => cartItem.value.push(p);
    const removeProduct = (id: number) => cartItem.value.filter(prod => prod.id === id);

    return {
        cartItem,
        subTotal,
        totalItems,

        addProduct,
        removeProduct
    }
}


