import React, {useEffect, useState} from 'react';
import MainFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import {Link, NavLink, Outlet} from "react-router-dom";
import dog from "./Dog.jsx";

function Walkers(props) {
    const [walkers, setWalkers] = useState("");
    const [dogId, setDogId] = useState("");

    useEffect(() => {
        // console.log("Yay, I'm here!")
        MainFacade.fetchWalkers()
            .then(res => setWalkers(res))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        MainFacade.fetchWalkersFromDogId(dogId)
            .then(res => setWalkers(res))
    }


    return (
        <div className="outDiv">
            <h1 style={{marginLeft: '20px'}}>Find all the Walkers of a Dog!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Dog Id" value={dogId}
                           onChange={e => setDogId(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            {walkers.length > 0 ?
                <div>
                    {walkers.map((walker, index) => (
                        <span key={index}>
                            <span className="walkerCards">
                                <h2>{walker.name}</h2>

                                <p>Address: {walker.address}</p>
                                <p>Phone Number: {walker.phone}</p>
                                <p style={{fontSize: '10px'}}>{walker.id}</p>

                            </span>
                        </span>
                    ))
                    }
                </div>
                :
                <div>
                    <h1>
                        There are no walkers!
                    </h1>
                </div>
            }
        </div>
    );
}

export default Walkers;
