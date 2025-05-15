import { DirectoryDisplay } from "@/components/DirectoryDisplay";
import { Sidebar } from "@/components/Sidebar";
import fs from "fs";
import path from "path";

export async function readDirectoryUsingNode(): Promise<string[]> {
    const rootDir = path.resolve(".", "..")
    console.log('Root directory:', rootDir)

    return new Promise((resolve, reject) => {
        fs.readdir(rootDir, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err)
                reject(err)
            } else {
                console.log('Files in directory:', files)
                resolve(files);
            }
        })
    })
}

export default async function Home() {
    const files = readDirectoryUsingNode()
    return (
        <div className="grow flex flex-col">
            <div className="h-1 grow flex">
                <Sidebar></Sidebar>
                <div className="grow self-stretch bg-slate-200 flex flex-col gap-2 items-center justify-center">
                    <div>Home page</div>
                    <DirectoryDisplay filesPromise={files}></DirectoryDisplay>
                </div>
            </div>
        </div>
    )
}
