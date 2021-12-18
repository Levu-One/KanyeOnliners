import Quote from "./Quote";
import useQuotes from "../useQuotes";

const QuoteList = () => {
    const {filteredQuotes} = useQuotes()
    
    return(
        <div className="quote-list">
            <h2>Quotes</h2>

            <div className="list">
                {filteredQuotes.map(({quote}, index) => {
                    return(
                        <Quote 
                        key={quote + "-" + index} 
                        quote={quote}/>
                    )  
                })}
            </div>
        </div>
    )
}

export default QuoteList;