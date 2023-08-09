import { $, useComputed$, useContext } from "@builder.io/qwik";

import { productsContext } from "../context/product.context";

// export const useProductList = routeLoader$<IProduct[]>(async() =>{
//     const products = await getProducts();
//     return products;
//   })

export const useProductList = () => {
    const produts = useContext(productsContext);

    const getOneProductId = $((productId: number) => {
        return produts.filter(prod => prod.id === productId)
    })

    const getProductsForIds = $((ids: number[]) => {
        return ids.map(id => produts.filter(prod => prod.id === id));
    })


    return {
        produts: useComputed$(() => produts),

        getOneProductId,
        getProductsForIds 
    }
    
}