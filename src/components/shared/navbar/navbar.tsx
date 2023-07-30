import { component$ } from '@builder.io/qwik';
import { CartIcon } from '../icons/cart-icon';
import { StoreIcon } from '../icons/store-icon';

export const Navbar = component$(() => {
  return (<>
    <nav class="bg-[#1F1D2B] top-0 fixed h-14 w-full text-white flex justify-around items-center z-20">
        <div class="ml-4 flex items-center">
            <span class="mr-2">
                <StoreIcon height={1.5} />
            </span>
            <span class="text-xl text-bold sm:hidden">Cart store example</span>
        </div>
        <div class="mr-4">
            <button>
            <span class=" bg-red-600 rounded-full text-xs  -translate-x-30 -translate-y-30 left-100 top-1 absolute inline-block">+1</span>
                <CartIcon height={1.3} />
            </button>
        </div>
    </nav>
  </>)
});