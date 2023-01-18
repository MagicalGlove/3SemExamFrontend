import React, {useEffect, useState} from 'react';
import MFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import "../styles/createdog.css"

function Admin(props) {
    const [dog, setDog] = useState({
        name: '',
        breed: '',
        image: '',
        gender: '',
        birthday: '',
    });

    const handleChange = (event) => {
        setDog({...dog, [event.target.name]: event.target.value});
    }

    const submit = () => {
        MFacade.createDog(dog)
    }

    return (
        <div className="createDogDiv">
            <h1 style={{marginLeft: '2.5%'}}>Create a new dog!</h1>
            <div className="outerDiv">
                <div className="inputBox">
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" value={dog.name} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Breed:
                            <input type="text" name="breed" value={dog.breed} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Image:
                            <input type="text" name="image" value={dog.image} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Gender:
                            <input type="text" name="gender" value={dog.gender} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Birthday:
                            <input type="text" name="birthday" placeholder="Day/Month-Year" value={dog.birthday} onChange={handleChange}/>
                        </label>
                        <br/>
                    </form>
                    <button onClick={submit}>Create Dog!</button>
                </div>
                <div>
                     <span>
                            <span className="walkerCards">
                                <h2>{dog.name}</h2>
                                <p>Breed: {dog.breed}</p>
                                <p>Gender: {dog.gender}</p>
                                <p>Birthday: {dog.birthday}</p>
                                <img src={dog.image} title={dog.image}/>
                            </span>
                        </span>

                </div>
            </div>
        </div>
    );
}

export default Admin;