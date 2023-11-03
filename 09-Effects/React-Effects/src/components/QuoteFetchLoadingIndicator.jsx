import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

const styles = {
    color: "orange",
    textTransform: "upperCase",
    marginTop: "20px"
     }

export default function QuoteFetchLoadingIndicator(){

    const [intialQuote, setQoute] = useState({text: "", author: ""})
    const [isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetchDataAndSetQuote()
    }, []);

    async function fetchDataAndSetQuote(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQoute = jsonResponse.quote;
        setQoute(randomQoute);
        setIsLoading(false);
    }

    return (
        <div>
           {isLoading ? <p>Loading</p> : <p></p>}
            <p>{intialQuote.text} - {intialQuote.author}</p>
        </div>
    )

}