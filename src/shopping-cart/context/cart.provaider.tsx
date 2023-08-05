import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { CartContext, ICartState } from "./cart.context";

export const CartProvaider = component$(() => {

    // creamos el estado por defecto
    const cart = useStore<ICartState>({
        cartItems: []
    })

    // proveemos el contexto en la app
    useContextProvider(CartContext, cart);


    return (<Slot />)
})