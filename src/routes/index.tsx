import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import { PageTitle } from "~/components/shared/components";
import { ProductCard } from "~/product/components/productCard";

import { getProducts } from "~/helpers/get-products";

import { IProduct } from "~/product/interface";
import { productsContext } from "~/product/context/product.context";


export default component$(() => {

  const productsState = useContext(productsContext);


  useVisibleTask$(async () =>{
    if(productsState.products.length <= 0) {
      const products = await getProducts();
      productsState.products = [...productsState.products, ...products];
    }
  })

  return (<>
      <div class="flex flex-col items-center w-full">

        <header class="bg-white w-full text-center py-6">
          <PageTitle text="¡Bienvenido a vamos a comprar!" />
            <p class="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
              Estás a pocos clics de distancia para comprar las mejores cosas en el mercado en línea. 🐶    
            </p>
        </header>

        <div class="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {
            productsState.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>

      </div>
    </>)
    
    });

export const head: DocumentHead = {
  title: "Bienvenido a Store",
  meta: [
    {
      name: "description",
      content: "Qwik shopping cart example",
    },
  ],
};
