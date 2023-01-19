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

    function updateDog(dog, dogId){
        let jsonDog = JSON.stringify(dog);
        console.log("jsonDog: ", jsonDog)
        const options = apiFacade.makeOptions("PUT", true, dog);
        return fetch(URL + "/api/dog/updateDog/" + dogId, options)
            .then(res => handleHttpErrors(res))
    }

    function getDogById(id){
        return fetch(URL + "/api/dog/getbyid/" + id)
            .then(res => handleHttpErrors(res))
    }

    function getOwnerById(id){
        return fetch(URL + "/api/owner/getbyid/" + id)
            .then(res => handleHttpErrors(res))
    }


    const deleteDog = (id) => {
        const options = apiFacade.makeOptions("DELETE", true);
        return fetch (URL + "/api/dog/" + id, options).then(handleHttpErrors)
    }


    const connectDogOwner = (dogId, ownerId) => {
        const options = apiFacade.makeOptions("put");
        return fetch (URL + "/api/dog/connectOwner/" + dogId + "/" + ownerId, options).then(handleHttpErrors)
    }


    return {
        fetchWalkers,
        fetchDogsFromOwnerId,
        createDog,
        deleteDog,
        updateDog,
        getDogById,
        getOwnerById,
        connectDogOwner
    }
}

const facade = MainFacade();
export default facade;
