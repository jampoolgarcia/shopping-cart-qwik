import { component$ } from "@builder.io/qwik";
import { BsCart2 } from "@qwikest/icons/bootstrap";
import { useShoppingCart } from "~/shopping-cart/hooks";

export const ProductForm = component$(() => {

    const { addProduct } = useShoppingCart();

    return (
        <div class="w-full">
      <div class="flex justify-start space-x-2 w-full">
        <div class="flex flex-col items-start space-y-1 flex-grow-0">
          <label class="text-gray-500 text-base">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            //value={quantity}
            //onChange={(e) => updateQuantity(e.target.value)}
            class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
    
      </div>
      <button
        class="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline  hover:bg-palette-dark"
        aria-label="cart-button"
        //onClick={addProduct()}
      >
        Add To Cart
        <BsCart2 class="w-5 ml-2" />
      </button>
    </div>
    )
})