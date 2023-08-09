import { $, useContextProvider, useStore } from "@builder.io/qwik";
import { CartContext, ICartState } from "./cart.context";

export const cartProvaider = () => {

    // creamos el estado por defecto
    const cart = useStore<ICartState>({
        id: 1,
        userId: 1,
        date: new Date('2020-03-02T00:00:00.000Z'),
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(CartContext, cart);

}