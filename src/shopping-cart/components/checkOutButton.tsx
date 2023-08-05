import { component$ } from "@builder.io/qwik";
import { BsArrowBarLeft } from "@qwikest/icons/bootstrap";

export const CheckOutButton = component$(() =>{
    return (<>
        <a 
        href="/" 
        aria-label="checkoutproducts"
        class="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
        justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
        >
            Comprar
            <BsArrowBarLeft class="w-4 ml-2 inline-flex" />
        </a>
    </>)
})