import { $, useContextProvider, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { IProduct } from "../interface";
import { IProductsState, productsContext } from "./product.context";


export const productProvaider = () => {

    // creamos el estado por defecto
    const productsState = useStore<IProductsState>({
        products: []
    })

    // proveemos el contexto en la app
    useContextProvider(productsContext, productsState);

}