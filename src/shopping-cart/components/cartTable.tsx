import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { BsTrash } from "@qwikest/icons/bootstrap";

import { IProduct } from "~/interface";
import { Price } from "~/components/shared/components/price";
import { useShoppingCart } from "../hooks";

interface Props {
    products: IProduct[],
}


export const CartTable = component$(({ products }: Props) =>{

    const { subTotal } = useShoppingCart();

    return (<>   
      <div class="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table class="mx-auto">
        <thead>
          <tr class="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th class="font-primary font-normal px-6 py-4">Product</th>
            <th class="font-primary font-normal px-6 py-4">Quantity</th>
            <th class="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
            <th class="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-palette-lighter">
          {products.map(({ id, title, image, price }) => (
            <tr key={id} class="text-sm sm:text-base text-gray-600 text-center">
              <td class="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={image}
                  alt={title}
                  height={64}
                  width={64}
                  class={`hidden sm:inline-flex`}
                />
                <Link href={`/`}>
                  <a class="pt-1 hover:text-palette-dark">
                    {title}
                  </a>
                </Link>
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={0}
                  //onChange={(e) => updateItem(item.variantId, e.target.value)}
                  class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td class="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price
                  num={price}
                  numSize="text-lg"
                />
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  class=""
                  //onClick={() => updateItem(item.variantId, 0)}
                >
                  <BsTrash class="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" />
                </button>
              </td>
            </tr>
          ))}
          {
            subTotal.value === 0 ?
              null
              :
              <tr class="text-center">
                <td></td>
                <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price
                    num={subTotal.value}
                    numSize="text-xl"
                  />
                </td>
                <td></td>
              </tr>
          }
        </tbody>
      </table>
    </div>
    </>)
})