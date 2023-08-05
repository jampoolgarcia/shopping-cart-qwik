import { component$ } from "@builder.io/qwik";
import { BsHeart } from "@qwikest/icons/bootstrap";

export const Footer = component$(() => {
    return (<>
        <footer class="py-4 flex justify-center items-center font-primary">
        Build by Jampool Garcia <BsHeart />
        <a
        href="https://twitter.com/deepwhitman"
        target="_blank"
        rel="noreferrer"
        class="text-palette-primary font-bold px-1"
      >
        @JampoolGarcia
        </a>
        </footer>
    </>)
})