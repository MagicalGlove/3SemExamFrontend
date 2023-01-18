import React, {useEffect, useState} from 'react';
import MFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import "../styles/createdog.css"

function Admin(props) {
    const [id, setId] = useState('');

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

    const updateDog = () => {
        console.log(dog, "---", id)
        MFacade.updateDog(dog, id)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dog = await MFacade.getDogById(id);
            setDog(dog);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="createDogDiv">
            <h1 style={{marginLeft: '2.5%'}}>Create or Update a dog!</h1>
            <div className="outerDiv">
                <div className="inputBox">
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Fluffy" value={dog.name}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Breed:
                            <input type="text" name="breed" placeholder="Maltese" value={dog.breed}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Image:
                            <input type="text" name="image" placeholder="Example.com/dog.jpg" value={dog.image}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Gender:
                            <input type="text" name="gender" placeholder="Male/Female" value={dog.gender}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Birthday:
                            <input type="text" name="birthday" placeholder="Day/Month-Year" value={dog.birthday}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                    </form>
                    <button onClick={submit}>Create Dog!</button>
                    <button onClick={updateDog}>Edit Dog!</button>
                </div>
                <div>
                     <span>
                            <span className="walkerCards">
                                <h2>{dog.name}</h2>
                                <p>Breed: {dog.breed}</p>
                                <p>Gender: {dog.gender}</p>
                                <p>Birthday: {dog.birthday}</p>
                                <img style={{minWidth: '150px', maxWidth: '150px'}} src={dog.image} title={dog.image}/>
                            </span>
                     </span>
                </div>
            </div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Dog ID:
                            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                            <br/>
                            {id}
                        </label>
                        <button type="submit">Fetch Dog</button>
                    </form>
                    {dog && <div>{JSON.stringify(dog)}</div>}
                </div>
            </div>
        </div>
    );
}

export default Admin;