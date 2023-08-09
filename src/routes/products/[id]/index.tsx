import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getProductId } from "~/helpers/get-products";
import { IProduct } from "~/product/interface";
import { ProductImages } from "~/product/components";
import { ProductDatails } from "~/product/components/productDetails";

export const useProduct = routeLoader$<IProduct>(async ({params, redirect}) => {
    const id = Number(params.id);
    const product = await getProductId(id);
    return product;
  });
  

export default component$(() =>{
    const product = useProduct();


    return (
      <div class="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <ProductImages images={[ product.value.image, product.value.image, product.value.image ]} />
        <ProductDatails product={product.value} />
      </div>
    )
    
    
})