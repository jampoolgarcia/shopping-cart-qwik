import { component$ } from '@builder.io/qwik';
import { BsCartPlus } from '@qwikest/icons/bootstrap';

import { IProduct } from '~/interface';

export const ProductItem = component$(({ rating:  { count }, image, title, description,  price}: IProduct) => {
  return (
    <>
        
        <div class="card flex flex-col items-end">
            <span class="badge mr-3 mt-3 ml-auto">Cantidad: { count } </span>
            <img
            src={image}
            class="w-full"
            alt="imagen" 
            width="200"
             height="200"
            />
            <div class="px-6 py-4">
                <h4 class="font-bold text-xl mb-2">{ title }</h4>
                <p class="text-gray-700 text-base">{ description }</p>
            </div>  
            <div class="w-full px-6 pt-4 pb-3 flex justify-between items-center">
                <button class="bg-blue-700 rounded p-2 text-white font-bold flex justify-center">
                  <span class="inline-block mr-1 text-xl"><BsCartPlus /></span>Agregar
                </button>
                <span class="bg-green-700 rounded-xl px-3 text-white text-center">{ price }$</span>
            </div>
        </div>

    </>
  )
});