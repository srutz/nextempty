import { Quote } from "@/components/Quote";
import { Suspense } from "react";

export default function Home() {
    console.log("Rendering Home")
    return (
        <div className="bg-orange-300 grow overflow-y-auto flex flex-col gap-4 items-center justify-center">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <Suspense key={i} fallback={<div>Loading...</div>}>
                    <Quote quoteId={i} />
                </Suspense>
            ))}
        </div>
    )
}
