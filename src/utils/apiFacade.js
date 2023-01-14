
import settings from "../settings.js";

const URL = settings;


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function apiFacade() {

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        return getToken() != null;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const login = (user, password, setRoles) => {
        const options = makeOptions("POST", true, {username: user, password: password});
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token);
                setRoles(res.roles);
            })

    }

    const fetchData = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
    }
    const fetchAdminData = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
    }

    const fetchJokes = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "/api/jokes", options).then(handleHttpErrors);
    }

    function makeOptions(method, addToken, body) {
        method = method ? method : 'GET';
        const opts = {
            method: method,
            headers: {
                ...(['PUT', 'POST'].includes(method) && {
                    "Content-type": "application/json"
                }),
                "Accept": "application/json"
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        fetchAdminData,
        fetchJokes
    }
}

const facade = apiFacade();
export default facade;
