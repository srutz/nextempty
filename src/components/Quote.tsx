
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
    console.log("Rendering Quote", quoteId)
    const r = await fetch(`https://dummyjson.com/quotes/${encodeURIComponent(quoteId)}`, {
        next: {
            revalidate: 3_600,
        },
        cache: "no-cache",
    })
    const quote = await r.json() as Quote
    await delay(2_000 + Math.random() * 3_000)
    return (
        <div className="w-[600px] p-4 bg-white rounded-lg shadow-xl border border-gray-300">
            <p className="text-sm">{quote.quote}</p>
            <p className="text-xs text-gray-500">- {quote.author}</p>
        </div>
    )
}

