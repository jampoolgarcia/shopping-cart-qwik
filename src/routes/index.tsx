import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import { ProductItem } from "~/components/product";
import { getProducts } from "~/helpers/get-products";
import { IProduct } from "~/interface";

export const useProductList = routeLoader$<IProduct[]>(async() =>{
  const products = await getProducts();
  return products;
})

export default component$(() => {

  const products = useProductList();

  return (<>
      <div class="mt-14 flex flex-col items-center w-full">

      <header class="bg-white w-full text-center py-6">
        <h1 class="text-4xl">¡Bienvenido a vamos a comprar!</h1>
        <p>
          Estás a pocos clics de distancia para comprar las mejores cosas en el mercado en línea.
        </p>
      </header>

          <div class="my-5 mx-2 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-clos-1 gap-4 lg:w-[80%]">
              {
                products.value.map((product) => (
                  <div key={product.id}>
                    <ProductItem product={product} />
                  </div>
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
