import { atom } from "./Atoms";

export const temperatureAtom = atom(10)
export const weatherAtom = atom<"good" | "bad" | "medium">("medium")

