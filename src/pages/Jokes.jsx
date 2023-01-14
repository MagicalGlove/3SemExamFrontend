import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";

function Jokes(props) {
    const [joke, setJoke] = useState({})
    useEffect(  () => {
        facade.fetchJokes().then((res) => setJoke(res))
    }, [])
    return (
        <div>
            <div>
                {joke.joke1}
            </div>
            <div>
                {joke.joke2}
            </div>
        </div>
    );
}

export default Jokes;