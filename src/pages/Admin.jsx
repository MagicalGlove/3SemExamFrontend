import React, {useEffect, useState} from 'react';
import MFacade from "../utils/MainFacade.js";
import "../styles/overallstyling.css"
import "../styles/createdog.css"

function Admin(props) {
    const [dogId, setDogId] = useState('');
    const [ownerId, setOwnerId] = useState('');
    const [owner, setOwner] = useState({
        name: '',
        address: '',
        phone: '',
    });
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

    const handleChangeOwner = (event) => {
        setOwner({...owner, [event.target.name]: event.target.value});
    }

    const submit = () => {
        MFacade.createDog(dog)
    }

    const updateDog = () => {
        MFacade.updateDog(dog, dogId)
    }

    const connectDogOwner = () => {
        MFacade.connectDogOwner(dogId, ownerId)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dog = await MFacade.getDogById(dogId);
            setDog(dog);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitOwner = async (e) => {
        e.preventDefault();
        try {
            const owner = await MFacade.getOwnerById(ownerId);
            setOwner(owner);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="createDogDiv">
            <h1 style={{marginLeft: '2.5%'}}>Create or Update a dog!</h1>
            <div className="outerDiv">
                <div className="createAndEditDogsBox">
                    <form>
                        <label>
                            Name:
                            <br/>
                            <input type="text" name="name" placeholder="Fluffy" value={dog.name}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Breed:
                            <br/>
                            <input type="text" name="breed" placeholder="Maltese" value={dog.breed}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Image:
                            <br/>
                            <input type="text" name="image" placeholder="Example.com/dog.jpg" value={dog.image}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Gender:
                            <br/>
                            <input type="text" name="gender" placeholder="Male/Female" value={dog.gender}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Birthday:
                            <br/>
                            <input type="text" name="birthday" placeholder="Day/Month-Year" value={dog.birthday}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                    </form>
                    <button style={{float: 'left'}} className="createAndEditDogsButtons" onClick={submit}>Create Dog!
                    </button>
                    <button style={{float: 'right'}} className="createAndEditDogsButtons" onClick={updateDog}>Edit
                        Dog!
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Dog ID:
                                    <br/>
                                    <input type="text" value={dogId} onChange={e => setDogId(e.target.value)}/>
                                </label>
                                <br/>
                                <button className="createAndEditDogsButtons" type="submit">Fetch Dog</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                     <span>
                            <span className="showEditDog">
                                <h2>{dog.name}</h2>
                                <p>Breed: {dog.breed}</p>
                                <p>Gender: {dog.gender}</p>
                                <p>Birthday: {dog.birthday}</p>
                                <img style={{
                                    minWidth: '250px',
                                    maxWidth: '250px',
                                    minHeight: '200px',
                                    maxHeight: '200px'
                                }} src={dog.image} title={dog.image}/>
                            </span>
                     </span>
                    <div style={{textAlign: 'center'}}>
                    <button style={{width: '200px'}} className="createAndEditDogsButtons" onClick={connectDogOwner}>Connect Dog {dogId} and Owner {ownerId}</button>
                    </div>
                </div>
                <div className="createAndEditDogsBox">
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Name" value={owner.name}
                                   onChange={handleChangeOwner}/>
                        </label>
                        <br/>
                        <label>
                            Address:
                            <input type="text" name="address" placeholder="Address" value={owner.address}
                                   onChange={handleChangeOwner}/>
                        </label>
                        <br/>
                        <label>
                            Phone:
                            <input type="text" name="image" placeholder="XXXX XXXX" value={owner.phone}
                                   onChange={handleChangeOwner}/>
                        </label>
                    </form>
                    <br/>
                    <div>
                        <div>
                            <form onSubmit={handleSubmitOwner}>
                                <label>
                                    Owner ID:
                                    <br/>
                                    <input type="text" value={ownerId} onChange={e => setOwnerId(e.target.value)}/>
                                    <br/>
                                </label>
                                <button className="createAndEditDogsButtons" type="submit">Fetch Owner</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;