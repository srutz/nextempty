import { Sidebar } from "@/components/Sidebar";
import { useGuiStore } from "@/hooks/GuiStateStore";

export default function Home() {
    const { showSidebar, setShowSidebar } = useGuiStore()
    return (
        <div className="grow flex flex-col">
            <div className="h-1 grow flex">
                <Sidebar></Sidebar>
                <div className="grow self-stretch bg-slate-200 flex flex-col gap-2 items-center justify-center">
                    <div>Home page</div>
                    <button onClick={() => {}}>Toggle Sidebar</button>
                </div>
            </div>
        </div>
    )
}
