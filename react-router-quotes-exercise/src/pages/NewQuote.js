import QuoteForm from "../components/quotes/QuoteForm"

export const NewQuote = () => {

  const addQuoteHandler =(quoteDate) => {
    console.log(quoteDate);
  }
    return(
      <QuoteForm onAddQuote={addQuoteHandler}/>
    )
  }