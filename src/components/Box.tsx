"use client"

import { ReactNode } from "react";

export function Box({children } : { children: ReactNode }) {
    return (
        <div className="p-4 m-2 border border-gray-500 bg-slate-200 rounded-xl shadow-xl flex flex-col gap-2">
            {children}
        </div>
    )
}