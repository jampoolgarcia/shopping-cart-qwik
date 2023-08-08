import { component$ } from "@builder.io/qwik";

import { BackToProductButton } from "./backToProductButton";
import { IProduct } from "~/interface";
import { ProductInfo } from "./productInfo";
import { ProductForm } from "./productForm";


export const ProductDatails = component$((props: { product: IProduct }) =>{



    return (
      <div class="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={props.product.title}
        description={props.product.description}
        price={props.product.price}
      />
      <ProductForm 
        //title={product.title}
        //handle={productData.handle}
        //variants={productData.variants.edges} 
        //mainImg={productData.images.edges[0].node}
        //setVariantPrice={setVariantPrice}
      /> 
    </div>
    )
}) 