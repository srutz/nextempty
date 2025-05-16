import { QuoteViewer } from "./QuoteViewer"

/* server side quote component */
export type Quote = {
    id: number
    author: string
    quote: string
}

export function delay(ms: number) {
    return new Promise(resolv => setTimeout(resolv, ms))
}

export async function Quote({ quoteId }: { quoteId: number }) {
    //const p = await headers()
    //console.log(Array.from(p.entries()))
    console.log("Rendering Quote", quoteId)
    const r = await fetch(`https://dummyjson.com/quotes/${encodeURIComponent(quoteId)}`, {
        /*
        next: {
            revalidate: 3_600,
        },
        cache: "no-cache",
        */
    })
    await delay(2_000 + Math.random() * 3_000)
    //const quote = await r.json() as Quote
    const quotePromise = r.json()
    return <QuoteViewer quotePromise={quotePromise} />
}

