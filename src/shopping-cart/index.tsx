import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";


import { useShoppingCart } from "./hooks";
import { PageTitle } from "~/components/shared/components";
import { CartTable } from "./components/cartTable";
import { CheckOutButton } from "./components/checkOutButton";
import { BackToProductButton } from "~/product/components/backToProductButton";


export const ShoppingCart = component$(() => {

    const { cartItems } = useShoppingCart(); 

    return (
      <>
       <div class="container mx-auto mb-20 min-h-screen">
          <PageTitle text="Your Cart" />
          <CartTable products={cartItems.value}
          />
          <div class="max-w-sm mx-auto space-y-4 px-2">
            <CheckOutButton />
            <BackToProductButton />
          </div>

        </div>
          
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