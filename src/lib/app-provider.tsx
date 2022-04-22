import * as React from "react"

type ContextType = {
  [key: string]: string | number | boolean
}

const AppContext = React.createContext<ContextType>(undefined)

const AppProvider = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppContext = () => React.useContext(AppContext)

export { AppProvider, useAppContext }
