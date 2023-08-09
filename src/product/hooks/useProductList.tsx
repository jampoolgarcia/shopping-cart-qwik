import { routeLoader$ } from "@builder.io/qwik-city";
import { getProducts } from "~/helpers/get-products";
import { IProduct } from "~/product/interface";
import { productsContext } from "../context/product.context";
import { useContext } from "@builder.io/qwik";

// export const useProductList = routeLoader$<IProduct[]>(async() =>{
//     const products = await getProducts();
//     return products;
//   })

export const useProductList = () => {
    const produts = useContext(productsContext);

    const getOneProductId = (productId: number) => {

    }
    
}