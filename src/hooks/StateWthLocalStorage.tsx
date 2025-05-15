"use client"

import { useEffect, useState } from "react"


export function useStateWithLocalStorage<T>(storageKey: string, initialValue: T) {
    const [value, setValue] = useState<T>()
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(storageKey)
            setValue(storedValue ? JSON.parse(storedValue) : initialValue)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined" && value) {
            localStorage.setItem(storageKey, JSON.stringify(value))
        }
    }, [storageKey, value])

    return [value, setValue] as const
}