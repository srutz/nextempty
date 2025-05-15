"use client"

import { useState } from "react"

export function ClientComponent() {
    const [value, setValue] = useState(() => {
        console.log("useState in ClientComponent")
        return 100
    })
    //const formattedNumber = new Intl.NumberFormat().format(123.456);
    return (
        <div className="flex flex-col gap-2">
            <div>{value}</div>
        </div>
    )
}