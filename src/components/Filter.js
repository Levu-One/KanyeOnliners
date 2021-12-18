import { useContext } from "react"
import { AppContext } from "../app-context"
import useQuotes from "../useQuotes"

const Filter = ({quote}) => {
    const {filteredQuoteCount, totalQuoteCount} = useQuotes()
    const [state, setState] = useContext(AppContext)

    const {deleteAllQuotes, loadQuote} = useQuotes()
    const deleteAll = () => {
        deleteAllQuotes({quote})
    }
    const fetchQuote = () => {
        loadQuote()
    } 

    const setWordCount = (number) => {
        setState({...state, wordCount: number})
    }

    return(
        <div className="filter">

            <div className="napit">
                <input  onClick={fetchQuote} type="button" value="Fetch 1 quote" className="fetch" />
                <input  onClick={deleteAll} type="button" value="Delete all quotes" className="del" />
            </div>

            <div className="word-count">
                <label>Word count filter:</label>
                <input 
                value={state.wordCount} 
                onChange={(e) => setWordCount(e.target.value)} 
                type="number" 
                className="input" />
            </div>

            <div className="total">
                <div>Total quote count: {totalQuoteCount}</div>
                <div>Quotes in view: {filteredQuoteCount}</div>
            </div>

        </div>
    )
}

export default Filter;