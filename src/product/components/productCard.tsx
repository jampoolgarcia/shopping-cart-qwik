import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Price } from '~/components/shared/components';

import { IProduct } from '~/product/interface';

interface Props {
    product: IProduct
}

export const ProductCard = component$(({ 
    product: {
        id,
        image,
        title,
        description,
        price
    }
}: Props) => {

  return (
    <Link
    class="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter"
    href={`/products/${id}`}
  >
      <div class="h-72 border-b-2 border-palette-lighter relative">
        <img
          width="320"
          height="288"
          src={image}
          alt={title}
          class="transform  h-72 duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
        />
      </div>
      <div class="h-48 relative">
        <div class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold truncate">
          {title}
        </div>
        <div class="text-lg text-gray-600 p-4 font-primary font-light truncate">
          {description}
        </div>
        <div
          class="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
          rounded-tl-sm triangle"
        >
          <Price
            currency="$"
            num={price}
            numSize="text-lg"
          />
        </div>
      </div>
  </Link>
  )
});