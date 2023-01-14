import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";

function Admin(props) {
    const [adminInfo, setAdminInfo] = useState({})
    useEffect(  () => {
        facade.fetchAdminData().then((res) => setAdminInfo(res))
    },[])
    return (
        <div>{adminInfo.msg}</div>
    );
}

export default Admin;