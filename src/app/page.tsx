import { Box } from "@/components/Box";
import { Quote } from "@/components/Quote";
import { Suspense } from "react";

export default function Home() {
    console.log("Rendering Home")
    return (
        <div className="bg-orange-300 grow overflow-y-auto flex flex-col gap-4 items-center justify-center">
            {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
                <Suspense key={i} fallback={<div>Loading...</div>}>
                    <Quote quoteId={i} />
                </Suspense>
            ))}
            <Box>
                <ServerComp />
            </Box>
        </div>
    )
}


async function ServerComp() {
    console.log("RENDER RENDER")
    console.log("RENDER RENDER")
    console.log("RENDER RENDER")
    console.log("RENDER RENDER")
    return (<div>Hello</div>)
}

