import { $, component$, useSignal } from "@builder.io/qwik";
import { BsCart2 } from "@qwikest/icons/bootstrap";
import { IProduct } from "~/interface";
import { cartItems } from "~/shopping-cart/context";
import { useShoppingCart } from "~/shopping-cart/hooks";

export const ProductForm = component$((props: { product: IProduct }) => {

    const { addProduct } = useShoppingCart();
    const itemCart = useSignal<cartItems>({
        productId: props.product.id,
        quantity: 3,
        price: Number(props.product.price)
    });

    const updateQuantity = $((e: string) => {
        itemCart.value.quantity = Number(e);
    })

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
            value={itemCart.value.quantity}
            onChange$={(e) => updateQuantity(e.target.value)}
            class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
    
      </div>
      <button
        class="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline  hover:bg-palette-dark"
        aria-label="cart-button"
        onClick$={() => addProduct(itemCart.value)}
      >
        Add To Cart
        <BsCart2 class="w-5 ml-2" />
      </button>
    </div>
    )
})