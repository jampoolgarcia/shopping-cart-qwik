import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/shared/navbar/navbar";
import { CartProvaider } from "~/context/cart/cart.provaider";

export default component$(() => {
  return (
    <>
    <CartProvaider>
      <div class="bg-[#eeefef] w-full min-h-screen flex">
        <Navbar />
        <Slot />
      </div>
    </CartProvaider>
    </>
  );
});
