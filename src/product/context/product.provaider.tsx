import { $, useContextProvider, useStore } from "@builder.io/qwik";
import { IProduct } from "../interface";
import { productsContext } from "./product.context";

export const productProvaider = () => {

    // creamos el estado por defecto
    const products = useStore<IProduct[]>([])

    // proveemos el contexto en la app
    useContextProvider(productsContext, products);

}