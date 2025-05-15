import { RefObject, useEffect, useRef, useState } from "react";

type ResizeObserverEntry = { contentRect: DOMRectReadOnly; target: Element }
interface Size { width: number; height: number }

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
        ref: RefObject<T>, debounceDelay: number = 0) 
{
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        const element = ref.current
        if (!element) return
        const updateSize = (entries: ResizeObserverEntry[]) => {
            if (entries && entries[0]) {
                const { width, height } = entries[0].contentRect
                const updateStateWithSize = () => {
                    setSize((prevSize) => {
                        if (prevSize.width !== width || prevSize.height !== height)
                            return { width, height }
                        return prevSize
                    })
                }
                if (debounceDelay > 0) {
                    if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
                    debounceTimeout.current = setTimeout(updateStateWithSize, debounceDelay)
                } else {
                    updateStateWithSize()
                }
            }
        }
        setSize({ width: element.offsetWidth, height: element.offsetHeight })
        const observer = new ResizeObserver(updateSize as unknown as ResizeObserverCallback)
        observer.observe(element);
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
            observer.disconnect()
        }
    }, [ref, debounceDelay])
    return size
}
