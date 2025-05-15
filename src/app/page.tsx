import { Sidebar } from "@/components/Sidebar";
import { ToggleSidebar } from "@/components/ToggleSidebar";

export default function Home() {
    return (
        <div className="grow flex flex-col">
            <div className="h-1 grow flex">
                <Sidebar></Sidebar>
                <div className="grow self-stretch bg-slate-200 flex flex-col gap-2 items-center justify-center">
                    <div>Home page</div>
                    <ToggleSidebar></ToggleSidebar>
                </div>
            </div>
        </div>
    )
}
