import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

const styles = {
    color: "orange",
    textTransform: "upperCase",
    marginTop: "20px"
     }

export default function QuoteFetcher(){

    const [intialQuote, setQoute] = useState({text: "", author: ""})

    // To useEffect with an async call, we must wrap
    // it inside of a regular function
    // useEffect(() => { async function getQuoteData () {
    //     const response = await fetch(RANDOM_QUOTE_URL);
    //     const jsonResponse = await response.json();
    //     const randomQoute = jsonResponse.quote;
    //     setQoute(randomQoute)
    //     }
    //   getQuoteData();
      // and remember to pass in the second arg
      // an empty array that ensures this only 
      // runs when the component first mounts 
    // }, []);

    // And the above can be simplified to:

    useEffect(() => {
        fetchDataAndSetQuote()
    }, []);

    async function fetchDataAndSetQuote(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQoute = jsonResponse.quote;
        setQoute(randomQoute)
    }

    return (
        <div>
            <button style={styles} className="quote" onClick={fetchDataAndSetQuote}>
                Get New Random Quote
            </button>
            <p>{intialQuote.text} - {intialQuote.author}</p>
        </div>
    )

}