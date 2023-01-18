import React, {useEffect, useState} from 'react';
import MainFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import {Link, NavLink, Outlet} from "react-router-dom";

function Walkers(props) {
    const [dogs, setDogs] = useState("");
    const [ownerId, setOwnerId] = useState("");


    useEffect(() => {
        // console.log("Yay, I'm here!")
        MainFacade.fetchDogsFromOwnerId()
            .then(res => setDogs(res))
    }, [ownerId]);

    console.log("Im the dogs ", dogs)

    return (
        <div>
            <h1 style={{marginLeft: '20px'}}>Find all the dogs of an owner!</h1>
            {walkers.length > 0 ?
                <>
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
                </>
                :
                <div>
                    <h1>
                        There are no dogs!
                    </h1>
                </div>
            }
        </div>
    );
}

export default Walkers;
