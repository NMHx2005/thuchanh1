import axios from "./api";


const login = (username, password) => {
    return axios.post("/auth/login", {username, password});
}

const register = (fullName, email, password, phone) => {
    return axios.post("/auth/register", { fullName, email, password, phone});
}

const getAccount = () => {
    return axios.get("/auth/account");
}

const logout = () => {
    return axios.post("/auth/logout");
}

export {login, register, getAccount, logout};