import { useContext, useEffect } from "react";
import { AppContext } from "./app-context";

const useQuotes = () => {
    const [state, setState] = useContext(AppContext)

    const FetchQuote = (quote) => {
        let new_quotes = [...state.quotes, quote]
        setState({...state, quotes: new_quotes})
    }

    useEffect(() => {
        filterQuotes()
    }, [state.wordCount, state.quotes, state.filterby])

    const loadQuote = async () => {
        const API_URL ="https://api.kanye.rest/"

        let response = await fetch(API_URL)

        let data = await response.json()
        
        let pituus = data.quote.split(" ").length

        data.words = pituus
        // console.log(data)

        FetchQuote(data)
    }


    const filterQuotes = () => {
        
        //jos ei sanamäärää -> kaikki lainaukset
        if(state.wordCount === ""){
            setState({...state, filteredQuotes: state.quotes})
        }

        //jos annetaan sanamäärä -> mätsäävät lainaukset
        else{
            let filtered = state.quotes.filter((item) => {
            return(
                item.words == state.wordCount
            )
        })
        setState({...state, filteredQuotes: filtered})
    }
}

    const deleteQuote = (q) => {
        let new_quotes = state.quotes.filter(quote => {
            return !(
                q.quote === quote.quote
            )
        })
        setState({...state, quotes: new_quotes})
    }

    const deleteAllQuotes = (quotes) => {
        let new_quotes = state.quotes.filter(quote => {
            return (
                quotes.quote === quote.quote
            )
        })
        setState({...state, quotes: new_quotes})
    }

    return{
        loadQuote,
        deleteAllQuotes,
        deleteQuote,
        QuoteFetch: FetchQuote,
        filteredQuotes: state.filteredQuotes,
        filteredQuoteCount: state.filteredQuotes.length, 
        totalQuoteCount: state.quotes.length,
    }
}

export default useQuotes;