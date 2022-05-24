import * as React from "react"

type ContextType = {
  [key: string]: string | number | boolean
}

type AppProviderProps = {
  children: React.ReactNode
  value: ContextType | null | undefined
}

const AppContext = React.createContext<ContextType | null | undefined>(undefined)

const AppProvider = ({ children, value }: AppProviderProps) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppContext = () => React.useContext(AppContext)

export { AppProvider, useAppContext }
