import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BsArrowBarLeft  } from '@qwikest/icons/bootstrap';

export const BackToProductButton = component$(() =>{


    return (
        <>
            <Link href="/" 
                aria-aria-label="back-to-products"
                class="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
                justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
                >
                    <BsArrowBarLeft class="w-4 mr-2 inline-flex" />
                    Volver a los productos                
            </Link>
        </>
    )
})