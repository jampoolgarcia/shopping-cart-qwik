import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";


import { CartItem } from './cart-item';

export default component$(() => {
  return (
    <>
    <section class="mt-14 flex justify-center w-full">
        <div class="flex flex-col items-center w-[60%] mt-6">
            <h1 class="font-bold text-xl ml-3">Carrito de Compras</h1>
            <CartItem />
            <CartItem />
        </div>
    </section>
        
    </>
  )
});

export const head: DocumentHead = {
    title: "Shopping Cart",
    meta: [
      {
        name: "description",
        content: "Qwik shopping cart example",
      },
    ],
  };