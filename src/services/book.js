import axios from "./api";


const getAllBooks = () => {
    return axios.get("/book?current=1&pageSize=10");
}


export {getAllBooks};