import { createContextId } from "@builder.io/qwik";
import { IProduct } from "~/interface";

export interface cartItems {
    productId: number;
    quantity: number;
    price: number;
}

export interface ICartState {
    id: number;
    userId: number;
    date: Date;
    products: cartItems[];
}

export const CartContext = createContextId<ICartState>('cart.context');