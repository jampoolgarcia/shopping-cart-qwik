import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import { BsCash } from "@qwikest/icons/bootstrap";

import { CartItem } from "~/shopping-cart/components/cart-item";
import { useShoppingCart } from "./hooks";


export const ShoppingCart = component$(() => {

    const { cartItems, subTotal, totalItems } = useShoppingCart(); 

    return (
      <>
      <section class="mt-14 flex justify-center w-full">
          <div class="flex flex-col items-center w-[60%] mt-6 my-5">
              <h1 class="font-bold text-xl ml-3">Carrito de Compras</h1>
              {
                cartItems.value.map((product) => (
                  <div key={product.id}>
                    <CartItem product={product} />
                  </div>
                ))
              }

              <hr class="w-full h-1 mx-auto my-4 bg-gray-700 border-0 rounded" /> 
              
              <div class="flex flex-col w-full">
                <div class="flex items-center justify-between my-2">
                  <div>
                    <h2 class="text-md font-bold">Sub Total:</h2>
                    <span class="text-xs">prductos: { totalItems } </span>
                  </div>
                  <span class="text-xl font-bold">{ subTotal }$</span>
                </div>
                  
                <button class="bg-blue-700 transition duration-150 ease-in-out hover:bg-indigo-500 active:bg-blue-800 rounded p-2 text-white font-bold flex justify-center items-center">
                  <span class="inline-block mr-2 text-xl">Pagar</span> <BsCash class="text-xl" />
                </button>
              </div>        
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