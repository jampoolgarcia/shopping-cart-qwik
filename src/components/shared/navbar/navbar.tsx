import { component$ } from '@builder.io/qwik';
import { CartIcon } from '../icons/cart-icon';
import { StoreIcon } from '../icons/store-icon';
import { Link } from '@builder.io/qwik-city';

import { BsCart2, BsShop } from "@qwikest/icons/bootstrap";

export const Navbar = component$(() => {
  return (<>
    <nav class="bg-[#1F1D2B] top-0 fixed h-14 w-full text-white flex justify-around items-center z-20 shadow-lg">
        <Link href='/' class="ml-4 flex items-center">
            <span class="mr-2">
            <div style={{ fontSize: "30px" }}>
                <BsShop />
            </div>
            </span>
            <span class="text-xl text-bold">Cart store example</span>
        </Link>
        <div class="mr-4">
            <Link href="/cart">
                <span class=" bg-red-600 rounded-full text-xs  -translate-x-30 -translate-y-30 left-100 top-1 absolute inline-block">+1</span>
                <div style={{ fontSize: "30px" }}>
                    <BsCart2 />
                </div>
            </Link>
        </div>
    </nav>
  </>)
});