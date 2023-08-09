import { $, component$ } from '@builder.io/qwik';
import { BsCartPlus } from '@qwikest/icons/bootstrap';
import { useShoppingCart } from '~/shopping-cart/hooks/use-shopping-cart';

import { IProduct } from '~/product/interface';

interface Props {
  product: IProduct
}

export const ProductItem = component$(({ product }: Props ) => {

  const { cartItems: cartItem, addProduct, totalItems } = useShoppingCart();

  return (
    <>
        <div class="card flex flex-col items-end">
            <span class="badge mr-3 mt-3 ml-auto">
              Cantidad: { product.rating.count } 
              </span>
            <img
            src={product.image}
            class="w-full max-h-[320px] min-h-[320px]"
            width="320"
            height="320"
            alt="imagen" 
            />
            <div class="px-6 py-4">
                <h4 class="font-bold text-xl mb-2 h-14 truncate-text-2">{ product.title }</h4>
                <p class="text-gray-700 text-base truncate-text-3">{ product.description }</p>
            </div>  
            <div class="w-full px-6 pb-3 flex justify-between items-center">
                <button onClick$={ () => addProduct(product) } class="bg-blue-700 transition duration-150 ease-in-out hover:bg-indigo-500 active:bg-blue-800 rounded p-2 text-white font-bold flex justify-center">
                  <span class="inline-block mr-1 text-xl"><BsCartPlus /></span>Agregar
                </button>
  
                <span class="bg-green-700 rounded-xl px-3 text-white text-center">{ product.price }$</span>
            </div>
        </div>

    </>
  )
});