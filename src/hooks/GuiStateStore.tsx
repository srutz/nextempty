
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export type GuiState = {
    showSidebar: boolean
    setShowSidebar: (showSidebar: boolean) => void
}

export const useGuiStore = create(persist<GuiState>(
    (set) => ({
        showSidebar: false,
        setShowSidebar: (showSidebar: boolean) => set(state => {
            return { ...state, showSidebar }
        }),
    }),
    {
        name: "kite-guistate",
        storage: createJSONStorage(() => localStorage),
    }))


