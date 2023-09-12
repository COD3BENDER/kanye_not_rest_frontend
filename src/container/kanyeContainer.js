import {useEffect, useState} from "react";
import Kanye from "../components/kanye";

const KanyeContainer = () => {

    const [quote, setQuote] = useState([]);

    const fetchQuote = async () =>{
        const response = await fetch("https://api.kanye.rest/");
        const data = await response.json();
        setQuote(data);
    }

    useEffect(() => {
        fetchQuote();
    },[])

    return (
        <>
            <div className="translucent-container">
                <Kanye quote={quote} />
            </div>
        </>
    )
}
export default KanyeContainer;