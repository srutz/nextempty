"use client"

import { useGuiStore } from "@/hooks/GuiStateStore"

export function ToggleSidebar() {
    const { showSidebar, setShowSidebar } = useGuiStore()
    return <button onClick={() => setShowSidebar(!showSidebar)}>Toggle Sidebar</button>
}