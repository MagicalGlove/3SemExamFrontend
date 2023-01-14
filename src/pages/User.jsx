import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";

function User(props) {
    const [userInfo, setUserInfo] = useState({})
    useEffect(  () => {
        facade.fetchData().then((res) => setUserInfo(res))
    },[])
    return (
        <div>{userInfo.msg}</div>
    );
}

export default User;