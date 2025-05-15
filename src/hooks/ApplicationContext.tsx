import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

export type ApplicationContextType = {
    username: string
}

const ApplicationContext = createContext<{ 
    applicationContext: ApplicationContextType, 
    setApplicationContext: Dispatch<SetStateAction<ApplicationContextType>>
}|null>(null)

export function ApplicationContextProvider({ children }: { children: ReactNode }) {
    const [ applicationContext, setApplicationContext ] = useState<ApplicationContextType>({
        username: ""
    })
    return (
        <ApplicationContext.Provider value={ { applicationContext, setApplicationContext } }>
            {children}
        </ApplicationContext.Provider>
    )
}

export function useApplicationContext() {
    const context = useContext(ApplicationContext)
    if (context === null) {
        throw new Error("useApplicationContext must be used within an ApplicationContextProvider")
    }
    return context
}

