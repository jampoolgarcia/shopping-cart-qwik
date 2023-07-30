import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import { getProducts } from '~/helpers/get-products';
import { IProduct } from '~/interface';
import { ProductItem } from './product-item';

export const useProductList = routeLoader$<IProduct[]>(async() =>{
  const products = await getProducts();
  return products;
})

export const ProductList = component$(() => {

  const products =  useProductList();

  return (
    <>
        <div class="mt-5 mx-2 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-clos-1 gap-4">

        </div>
    </>
  )
});