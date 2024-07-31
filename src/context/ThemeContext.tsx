import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface IContext {
    isDark: boolean,
    toggleTheme: () => void
}


export const themeContext = createContext<IContext | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(themeContext)
    if (!context) {
        throw new Error("context error")
    }
    return context
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }
    return <themeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
    </themeContext.Provider>
}