"use client"

import { ApplicationContextProvider } from "@/hooks/ApplicationContext";
import { ReactNode } from "react";

export function Contexts({ children }: { children: ReactNode }) {
    return (
        <ApplicationContextProvider>
            {children}
        </ApplicationContextProvider>
    )
}