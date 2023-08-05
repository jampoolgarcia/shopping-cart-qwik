import { component$ } from "@builder.io/qwik";

interface Props {
    currency?: string,
    num: string,
    numSize: string
}

export const Price = component$(({currency = '$', num, numSize}: Props) => {

    return (
        <>
            {currency}<span class={numSize}>{num}</span>
        </>
    )
})