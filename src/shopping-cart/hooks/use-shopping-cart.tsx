import { $, useComputed$, useContext, useSignal } from "@builder.io/qwik";
import { CartContext, cartItems } from "../context";



export const useShoppingCart = () =>{

    const cartContext = useContext(CartContext);

    const subTotal = useComputed$(() => 
        (cartContext.products.reduce(
            (prev: any, curr) => prev + curr.price, 0)));
            
    const totalItems = useComputed$(() => 
        cartContext.products.length);


    const addProduct = $(
        (p: cartItems) => 
            cartContext.products.push(p));

    const removeProduct = $(
        (id: number) => 
            cartContext.products.filter(product => product.productId === id));

    return {
        cartItems: useComputed$(() => cartContext.products),
        subTotal,
        totalItems,

        addProduct,
        removeProduct
    }
}


