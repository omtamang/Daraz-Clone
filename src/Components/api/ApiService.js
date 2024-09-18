import axios from "axios";

export const retrieveUsers = (userName) =>axios.get(`http://daraz-clone-api-springboot-production.up.railway.app/users/${userName}`)

export const addUser = (userDetails) => axios.post(`http://daraz-clone-api-springboot-production.up.railway.app/user`, userDetails)

export const retrieveAllusers = () => axios.get("http://daraz-clone-api-springboot-production.up.railway.app/users")

export const retriveCartOfUser = (id) => axios.get(`http://daraz-clone-api-springboot-production.up.railway.app/users/${id}/carts`)