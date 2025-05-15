"use client"

import { useApplicationContext } from "@/hooks/ApplicationContext"

export function EditUsername() {
    const { applicationContext, setApplicationContext } = useApplicationContext()
    return (
        <div className="flex items-center gap-2">
            <label htmlFor="username" className="text-lg">Username:</label>
            <input id="username" className="border-2 border-gray-300 p-2 rounded" type="text" placeholder="Enter your username" 
                value={applicationContext.username}
                onChange={(e) => setApplicationContext({ ...applicationContext, username: e.target.value })}
                />
        </div>
    )
}