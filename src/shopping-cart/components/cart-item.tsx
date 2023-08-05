import { component$ } from '@builder.io/qwik';
import { BsTrash } from '@qwikest/icons/bootstrap';
import { IProduct } from '~/interface';

export interface Props {
    product: IProduct,
}

export const CartItem = component$(({ 
    product: { 
        image, 
        title, 
        description,
        price
    }}: Props) => {
  return (
    <>  
        <div class="card flex justify-between items-center my-3 mx-2 p-4">
            <img
                src={image}
                alt="imagen" 
                width="100"
                height="100"
                class="rounded shadow-sm"
            />
            <div class="mx-3">
                <h4 class="font-bold text-xl mb-2">{ title }</h4>
                <p class="text-gray-700 text-base break-words">{ description }</p>
            </div>

            <span class="font-bold text-xl">{ price }$</span> 

            <button class="text-red-400 underline ml-3">
                <span class="text-2xl"><BsTrash /></span>
            </button>
            
        </div>
    </>
  )
});