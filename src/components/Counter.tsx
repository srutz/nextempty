"use client"

import { useStateWithLocalStorage } from "@/hooks/StateWthLocalStorage"

export default function Counter() {
    const [count, setCount] = useStateWithLocalStorage("key100", 50)
    console.log("##########################")
    console.log("count", count)
    return (
        <div className="flex flex-col gap-2 items-center">
            {count && (
                <div>{count ? count : "UNDEFINEDUNDEFINEDUNDEFINED"}</div>
            )}
            <button onClick={() => setCount(prev => (prev ?? 0) + 1)}>Inc</button>
        </div>
    )
}
