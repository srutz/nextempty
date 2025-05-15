import { createContext, Dispatch, ReactNode, SetStateAction, use } from "react"
import { useStateWithLocalStorage } from "./StateWthLocalStorage"

export type ApplicationContextType = {
    username: string
}

const ApplicationContext = createContext<{ 
    applicationContext?: ApplicationContextType, 
    setApplicationContext: Dispatch<SetStateAction<ApplicationContextType|undefined>>
}|null>(null)

export function ApplicationContextProvider({ children }: { children: ReactNode }) {
    const [ applicationContext, setApplicationContext ] = useStateWithLocalStorage<ApplicationContextType>(
        "applicationContext",
        {
            username: ""
        })
    return (
        <ApplicationContext.Provider value={ { applicationContext, setApplicationContext } }>
            {children}
        </ApplicationContext.Provider>
    )
}

export function useApplicationContext() {
    const context = use(ApplicationContext)
    if (context === null) {
        throw new Error("useApplicationContext must be used within an ApplicationContextProvider")
    }
    return context
}

