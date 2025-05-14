"use client"

import { useStateWithLocalStorage } from "@/hooks/StateWthLocalStorage"

export function Counter() {
    const [count, setCount] = useStateWithLocalStorage("next-counter", 50)
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount((prev) => prev + 1)} className="bg-blue-500 text-white p-2 rounded">
                Increment
            </button>
        </>

    )
}


