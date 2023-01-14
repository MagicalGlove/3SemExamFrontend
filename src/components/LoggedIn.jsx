import React, {useEffect, useState} from "react";
import facade from "../utils/apiFacade.js";

export default function LoggedIn({setLoggedIn}) {

    const logout = () => {
        facade.logout()
        setLoggedIn(false)
        window.location.reload()
    }

    return (
        <div className="login-container">
            <button onClick={logout}>Logout</button>
        </div>
    )

}
