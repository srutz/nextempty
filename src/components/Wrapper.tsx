"use client"


import dynamic from "next/dynamic"
const Counter = dynamic(() => import("@/components/Counter"), { 
    ssr: false
})

export function Wrapper() {
    return <Counter/>
}

