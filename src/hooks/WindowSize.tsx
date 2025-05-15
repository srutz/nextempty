"use client"

import { useEffect, useState } from "react";

    
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState(() => ({
        width: -1,
        height: -1,
    }))

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return windowSize
}