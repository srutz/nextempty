"use client"

import { useEffect, useState } from "react"


export function useStateWithLocalStorage<T>(storageKey: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(storageKey)
            return storedValue ? JSON.parse(storedValue) : initialValue
        }
        return initialValue
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(storageKey, JSON.stringify(value))
        }
    }, [storageKey, value])

    return [value, setValue] as const
}