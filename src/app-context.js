import { createContext, useState } from "react";

const AppContext = createContext([{}, () => {}])

const AppProvider = ({children}) => {

    let quotes = []

    const [state, setState] = useState({
        quotes: quotes,
        filteredQuotes: quotes,
        filterby: 'quote',
        wordCount: ''
    })


    return(
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}