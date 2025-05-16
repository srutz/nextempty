"use client"

import { use } from "react"
import { Quote } from "./Quote"

export function QuoteViewer({ quotePromise }
: { quotePromise: Promise<Quote>}) 
{
    const quote = use(quotePromise)
    return (
        <div className="w-[600px] p-4 bg-white rounded-lg shadow-xl 
                border border-gray-300">
            <p className="text-sm">{quote.quote}</p>
            <p className="text-xs text-gray-500">- {quote.author}</p>
        </div>
    )
}