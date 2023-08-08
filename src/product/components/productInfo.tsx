import { component$ } from "@builder.io/qwik";
import { Price } from "~/components/shared/components";

interface Props {
    title: string;
    description: string;
    price: string;
}

export const ProductInfo = component$(({ title, description, price }: Props) =>{
    return (
        <div class=" font-primary">
        <h1 class="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
          {title}
        </h1>
        <p class="font-medium text-lg">
          {description}
        </p>
        <div class="text-xl text-palette-primary font-medium py-4 px-1">
          <Price
            currency="$"
            num={price}
            numSize="text-2xl"
          />
        </div>
      </div>
    )
})