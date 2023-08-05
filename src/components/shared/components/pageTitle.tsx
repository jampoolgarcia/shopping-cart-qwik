import { component$ } from "@builder.io/qwik";

interface Props {
    text: string
}

export const PageTitle = component$(({ text }: Props) =>{
    return (<>
       <h1 class="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
            {text}
        </h1>
    </>)
})