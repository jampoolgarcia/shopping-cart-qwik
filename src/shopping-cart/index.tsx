import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";


import { CartItem } from "~/shopping-cart/components/cart-item";
import { useShoppingCart } from "./hooks";

export const ShoppingCart = component$(() => {

    const { cartItems } = useShoppingCart(); 

    return (
      <>
      <section class="mt-14 flex justify-center w-full">
          <div class="flex flex-col items-center w-[60%] mt-6">
              <h1 class="font-bold text-xl ml-3">Carrito de Compras</h1>
              {
                cartItems.value.map((product) => (
                  <div key={product.id}>
                    <CartItem product={product} />
                  </div>
                ))
              }
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