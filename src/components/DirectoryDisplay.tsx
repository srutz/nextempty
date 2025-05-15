"use client"

import { use } from "react"

export function DirectoryDisplay({ filesPromise }: { filesPromise: Promise<string[]> }) {
    const files = use(filesPromise)
    return (
        <div className="self-stretch h-1 grow p-4 flex flex-col gap-2 ">
            <div>Directory Display</div>
            <div className="grow overflow-y-auto flex flex-col gap-2 items-center">
                <ul className="list-disc">
                    {files.map((file, index) => (
                        <li key={index}>{file}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}