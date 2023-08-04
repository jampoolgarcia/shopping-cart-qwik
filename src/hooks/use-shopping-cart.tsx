import { $, useComputed$, useContext, useSignal } from "@builder.io/qwik";
import { CartContext } from "~/context";
import { IProduct } from "~/interface";



export const useShoppingCart = () =>{

    const cartContext = useContext(CartContext);

    const subTotal = useComputed$(() => 
        (cartContext.cartItems.reduce(
            (prev: any, curr) => prev + curr.price, 0)));
            
    const totalItems = useComputed$(() => 
        cartContext.cartItems.length);


    const addProduct = $(
        (p: IProduct) => 
            cartContext.cartItems.push(p));

    const removeProduct = $(
        (id: number) => 
            cartContext.cartItems.filter(product => product.id === id));

    return {
        cartItem: useComputed$(() => cartContext.cartItems),
        subTotal,
        totalItems,

        addProduct,
        removeProduct
    }
}


