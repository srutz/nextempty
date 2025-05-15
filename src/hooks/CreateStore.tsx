import { useEffect, useState } from "react";

/* simple store ... use like this:


type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounterStore = createStore<CounterState>((set, get) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// Use in a component
export function Component() {
  const count = useStore(useCounterStore, state => state.count);
  const { increment, decrement, reset } = useStore(useCounterStore, state => ({
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset
  }));
  ...
*/


export type SetState<T> = (partial: T | ((state: T) => T), replace?: boolean) => void
export type GetState<T> = () => T
export type StoreApi<T> = {
    setState: SetState<T>;
    getState: GetState<T>;
    subscribe: (listener: (state: T, prevState: T) => void) => () => void;
}
export type StateCreator<T> = (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) => T;

export const createStore = <T,>(createState: StateCreator<T>): StoreApi<T> => {
    let state: T
    const listeners = new Set<(state: T, prevState: T) => void>()
    const setState: SetState<T> = (partial, replace) => {
        const nextState = typeof partial === 'function'
            ? (partial as (state: T) => T)(state)
            : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = replace ? (nextState as T) : { ...state, ...nextState };
            listeners.forEach(listener => listener(state, previousState));
        }
    }
    const getState: GetState<T> = () => state
    const subscribe = (listener: (state: T, prevState: T) => void) => {
        listeners.add(listener)
        return () => listeners.delete(listener)
    }
    const api = { setState, getState, subscribe }
    state = createState(setState, getState, api)
    return api
}

// React hook to use our store
export const useStore = <T, U>(
    api: StoreApi<T>,
    selector: (state: T) => U = state => state as unknown as U
): U => {
    const [value, setValue] = useState<U>(() => selector(api.getState()));
    useEffect(() => {
        const unsubscribe = api.subscribe((state, prevState) => {
            const nextValue = selector(state)
            const prevValue = selector(prevState)
            if (!Object.is(nextValue, prevValue)) {
                setValue(nextValue)
            }
        })
        return unsubscribe
    }, [api, selector])
    return value
}