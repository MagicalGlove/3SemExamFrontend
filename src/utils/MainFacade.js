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

    const fetchDogsFromOwnerId = (id) => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/owner/dogs/" + id, options).then(handleHttpErrors);
    }

    const createDog = (dog) => {
        const options = apiFacade.makeOptions("POST", true, dog);
        return fetch (URL + "/api/dog", options).then(handleHttpErrors)
    }

    const deleteDog = (id) => {
        const options = apiFacade.makeOptions("DELETE", true);
        return fetch (URL + "/api/dog/" + id, options).then(handleHttpErrors)

    }


    return {
        fetchWalkers,
        fetchDogsFromOwnerId,
        createDog,
        deleteDog
    }
}

const facade = MainFacade();
export default facade;
