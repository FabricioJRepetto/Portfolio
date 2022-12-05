import { createContext, useReducer, useContext } from 'react'

export const LangContext = createContext() 

function langReducer(state, action) {
  switch (action.type) {
    case 'change': {
        let aux = '';
        state.lang === 'En' 
            ? aux = 'Es' 
            : aux = 'En';
        return {lang: aux}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function LangProvider({children}) {
  const [state, dispatch] = useReducer(langReducer, {lang: 'Es'})
  const value = {state, dispatch}

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

function useLang() {
  const context = useContext(LangContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}

export { LangProvider, useLang }
