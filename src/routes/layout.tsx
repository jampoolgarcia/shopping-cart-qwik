import { component$, Slot } from "@builder.io/qwik";


import { Footer } from "~/components/shared/components/footer";
import { Navbar } from "~/components/shared/components/navbar";

import { ContextProvaider } from "./context.provaider";



export default component$(() => {
  return (
    <>
    <ContextProvaider>
      <div class="flex flex-col justify-between min-h-screen ">
        <Navbar />

        <main>
         <Slot />
        </main>
       
        <Footer />
      </div>
    </ContextProvaider>
    </>
  );
});
