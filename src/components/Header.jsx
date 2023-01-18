import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import Credentials from "./Credentials.jsx";


function Header({setErrorMsg, loggedIn, setLoggedIn, setUsername, username, roles, setRoles}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/walkers">Walkers</NavLink>
            <NavLink to="/dogs">Dogs</NavLink>
            <NavLink to="/jokes"><i className="fa fa-fw fa-envelope"></i> Jokes</NavLink>
            {!loggedIn ? (<Login setRoles={setRoles} setUsername={setUsername} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}  />) :
                (<>
                    <NavLink to="/user"><i className="fa fa-fw"></i> User</NavLink>
                    <NavLink to="/admin"><i className="fa fa-fw"></i> Admin</NavLink>
                    <div>
                    <Credentials username={username} roles={roles}/>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                    </div>
                </>)}
        </nav>
    );
}

export default Header;
