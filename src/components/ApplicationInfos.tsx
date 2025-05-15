"use client"

import { useApplicationContext } from "@/hooks/ApplicationContext"

export function ApplicationInfos() {
    const { applicationContext } = useApplicationContext()
    return (
        <div className="flex flex-col gap-2 p-4">
            <div>Active user: {applicationContext.username}</div>
        </div>
    )
}