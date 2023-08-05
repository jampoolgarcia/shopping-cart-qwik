import { component$, Slot } from "@builder.io/qwik";

import { CartProvaider } from "~/shopping-cart/context/cart.provaider";

import { Footer } from "~/components/shared/components/footer";
import { Navbar } from "~/components/shared/components/navbar";



export default component$(() => {
  return (
    <>
    <CartProvaider>
      <div class="flex flex-col justify-between min-h-screen ">
        <Navbar />

        <main>
         <Slot />
        </main>
       
        <Footer />
      </div>
    </CartProvaider>
    </>
  );
});
