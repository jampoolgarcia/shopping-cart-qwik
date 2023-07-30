import { component$ } from '@builder.io/qwik';
import { ProductItem } from './product-item';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useProductRequest = routeLoader$(async() =>{
  
})

export const ProductList = component$(() => {
  return (
    <>
        <div class="mt-5 mx-2 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-clos-1 gap-4">
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
           <ProductItem />
        </div>
    </>
  )
});