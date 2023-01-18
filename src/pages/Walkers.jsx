import React, {useEffect, useState} from 'react';
import MainFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import {Link, NavLink, Outlet} from "react-router-dom";

function Walkers(props) {
    const [walkers, setWalkers] = useState("");


    useEffect(() => {
        // console.log("Yay, I'm here!")
        MainFacade.fetchWalkers()
            .then(res => setWalkers(res))
    }, []);

    console.log("Im the walkers ", walkers)

    return (
        <div>
            <h1 style={{marginLeft: '20px'}}>All Walkers</h1>
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
                        There are no harbors!
                    </h1>
                </div>
            }
        </div>
    );
}

export default Walkers;
