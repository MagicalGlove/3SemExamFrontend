import settings from "../settings.js";
import apiFacade from "./apiFacade.js";
const URL = settings;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function MainFacade() {

    const fetchWalkers = () => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/walker/all", options).then(handleHttpErrors);
    }


    return {
        fetchWalkers

    }
}

const facade = MainFacade();
export default facade;