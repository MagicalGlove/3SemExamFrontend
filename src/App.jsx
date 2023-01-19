import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Walkers from "./pages/Walkers.jsx";
import Dog from "./pages/Dog.jsx";
import Header from "./components/Header.jsx";
import Admin from "./pages/Admin.jsx";


function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [roles, setRoles] = useState([])

    const obj = {
        name: "TestName",
        street: "TestStreet",
        town: "TestTown",
        country: "TestCountry",
    }

    return (
        <>
            <Header username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} loggedIn={loggedIn} roles={roles} setRoles={setRoles}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="walkers" element={<Walkers/>}/>
                <Route path="dogs" element={<Dog/>}/>
                <Route path="admin" element={<Admin/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
