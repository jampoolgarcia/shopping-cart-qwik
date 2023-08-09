import { createContextId } from "@builder.io/qwik";
import { IProduct } from "../interface";


export const productsContext = createContextId<IProduct[]>('products.context');