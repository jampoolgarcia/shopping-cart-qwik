import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/shared/navbar/navbar";

export default component$(() => {
  return (
    <>
    <div class="bg-[#eeefef] w-full min-h-screen flex">
      <Navbar />
      <Slot />
    </div>
    </>
  );
});
