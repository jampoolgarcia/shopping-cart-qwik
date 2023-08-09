import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { productProvaider } from "~/product/context/product.provaider";
import { cartProvaider } from "~/shopping-cart/context";

export const ContextProvaider = component$(() => {

    cartProvaider();
    productProvaider();

    return (<Slot />)
})