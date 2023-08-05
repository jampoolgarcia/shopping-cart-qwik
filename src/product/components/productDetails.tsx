import { component$ } from "@builder.io/qwik";

import { BackToProductButton } from "./backToProductButton";
import { IProduct } from "~/interface";


export const ProductDatails = component$(() =>{
    return (
        <div class="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
        <BackToProductButton />
      </div>
    )
}) 