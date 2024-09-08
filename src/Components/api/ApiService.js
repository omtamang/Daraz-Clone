import axios from "axios";

export const retrieveUsers = (userName) =>axios.get(`http://localhost:8080/users/${userName}`)

export const addUser = (userName) => axios.post(`http://localhost:8080/users/${userName}`)

export const retrieveAllusers = () => axios.get("http://localhost:8080/users")

export const retriveCartOfUser = (id) => axios.get(`http://localhost:8080/users/${id}/carts`)