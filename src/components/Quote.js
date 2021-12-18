import useQuotes from "../useQuotes";

const Quote = ({quote}) => {
    const {deleteQuote} = useQuotes()
    const deleteClick = () => {
        deleteQuote({quote})
    }

    return(
        <div className="quote-container">
            <div className="quote">
                {quote}
            </div>
    
            <div className="poista">
                <input onClick={deleteClick} className="poista-btn" type="button" value="Delete" />
            </div>
        </div>
    )
}


export default Quote;