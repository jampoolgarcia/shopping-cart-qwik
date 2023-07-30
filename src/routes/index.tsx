import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { ProductList } from "~/components/product";

export default component$(() => {
  return (
    <>
      <div class="mt-14 flex flex-col items-center w-full">

        <header class="bg-white w-full text-center py-6">
          <h1 class="text-4xl">¡Bienvenido a vamos a comprar!</h1>
          <p>
            Estás a pocos clics de distancia para comprar las mejores cosas en el mercado en línea.
          </p>
        </header>
        

        <ProductList />
      </div>
      
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
