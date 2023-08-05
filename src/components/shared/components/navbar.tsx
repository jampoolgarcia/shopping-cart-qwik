import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { BsCart2 } from "@qwikest/icons/bootstrap";
import { useShoppingCart } from '~/shopping-cart/hooks/use-shopping-cart';

export const Navbar = component$(() => {

  const { totalItems } = useShoppingCart();


  return (<>
     <header class="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div class="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/">
          <a class=" cursor-pointer">
            <h1 class="flex no-underline">
              <img height="32" width="32" alt="logo" class="h-8 w-8 mr-1 object-contain" src="../icons/shopify.svg" />
              <span class="text-xl font-primary font-bold tracking-tight pt-1">
                JShopping
              </span>
            </h1>
          </a>
        </Link>
        <div>
          <Link
            href="/cart"
          >
            <a class=" relative" aria-label="cart">
              <BsCart2 class="text-palette-primary w-6 m-auto" />
              {
                totalItems.value === 0 ?
                  null
                  :
                  <div
                    class="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                    {totalItems}
                  </div>
              }
            </a>
          </Link>
        </div>
      </div>
    </header >
  </>)
});