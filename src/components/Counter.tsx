"use client"

import { useStateWithLocalStorage } from "@/hooks/StateWthLocalStorage"
import { useWindowSize } from "@/hooks/WindowSize"

export function Counter() {
    const [count, setCount] = useStateWithLocalStorage("next-counter", 50)
    const { width, height } = useWindowSize()
    console.log("Window size is", width, height)
    return (
        <>
            <div className="self-center">{count}</div>
            <button onClick={() => setCount((prev) => prev + 1)} className="self-center bg-blue-500 text-white p-2 rounded">
                Increment
            </button>
            <div className="self-center">Window size is {width} x {height}</div>
        </>

    )
}


