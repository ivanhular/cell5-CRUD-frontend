import React, { createContext, useReducer } from 'react'
import { hobbyReducer } from './reducers/hobbyReducer'
import { hobbyInitialState } from './initialStates/hobbyInitialState'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [data, dispatch] = useReducer(hobbyReducer, hobbyInitialState)
  return (
    <GlobalContext.Provider value={{ data, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
