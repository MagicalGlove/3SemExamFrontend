import React, {useEffect, useState} from 'react';
import MainFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import "../styles/dog.css"

function Walkers(props) {
    const [dogs, setDogs] = useState("");
    const [ownerId, setOwnerId] = useState("");

    useEffect(() => {
        // console.log("Yay, I'm here!")
        MainFacade.fetchDogsFromOwnerId(0)
            .then(res => setDogs(res))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        MainFacade.fetchDogsFromOwnerId(ownerId)
            .then(res => setDogs(res))
    }

    const deleteDog = (evt) => {
        MainFacade.deleteDog(evt.target.value)
    }

    return (
        <div className="outDiv">
            <h1 style={{marginLeft: '20px'}}>Find all the dogs of an owner!</h1>
            <h2 style={{marginLeft: '20px'}}>Type 0 to get all dogs!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Owner Id" value={ownerId}
                           onChange={e => setOwnerId(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            {dogs.length > 0 ?
                <div>
                    {dogs.map((dog, index) => (
                        <span key={index}>
                            <span className="dogCards">
                                <h2>{dog.name}</h2>
                                <p>Breed: {dog.breed}</p>
                                <p>Gender: {dog.gender}</p>
                                <p>Birthday: {dog.birthday}</p>
                                <img style={{minWidth: '250px', maxWidth: '250px', minHeight: '250px', maxHeight: '250px'}} src={dog.image} title={dog.image}/>
                                <p style={{fontSize: '10px'}}>{dog.id}</p>
                                <button className="deleteButton" value={dog.id} onClick={deleteDog}>Delete</button>
                            </span>
                        </span>
                    ))
                    }
                </div>
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
