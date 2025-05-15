import { useEffect, useState } from "react";

/* poor man's jotai by stepan
 * allow global atoms and bind to their state
 * also support function-based state updates
 * attention: stuff is typed implicitly quite a 
 */

export type AtomType<T> = {
    get: () => T;
    set: (newValue: T | ((prevValue: T) => T)) => void;
    subscribe: (listener: (newValue: T) => void) => () => void;
}

/* make an atom */
export function atom<T>(initialValue: T): AtomType<T> {
    let value = initialValue
    const listeners = new Set<(newValue: T) => void>()

    return {
        get: () => value,
        set: (newValue: T | ((prevValue: T) => T)) => {
            if (typeof newValue === "function") {
                newValue = (newValue as any)(value) as T
            }
            if (value === newValue) {
                return
            }
            value = newValue
            listeners.forEach((listener) => listener(value))
        },
        subscribe: (listener: (newValue: T) => void) => {
            listeners.add(listener)
            return () => {
                listeners.delete(listener)
            }
        },
    }
}

/* react hook to use the atom */
export function useAtom<T>(atom: AtomType<T>) {
    const [value, setValue] = useState(atom.get())
    useEffect(() => {
        const unsubscribe = atom.subscribe(setValue)
        return () => unsubscribe()
    }, [atom])
    return [value, atom.set] as const
}

