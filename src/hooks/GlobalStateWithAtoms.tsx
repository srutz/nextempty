import { atom } from "./Atoms";

export const temperaturAtom = atom(10)
export const weatherAtom = atom<"good" | "bad" | "medium">("medium")

