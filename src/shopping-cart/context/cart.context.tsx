import { createContextId } from "@builder.io/qwik";
import { IProduct } from "~/interface";

export interface ICartState {
    cartItems: IProduct[]
}

export const CartContext = createContextId<ICartState>('cart.context');