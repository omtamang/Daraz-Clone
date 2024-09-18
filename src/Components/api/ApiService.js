import axios from "axios";

export const retrieveUsers = (userName) =>axios.get(`https://daraz-clone-api-springboot-production.up.railway.app/users/${userName}`)

export const addUser = (userDetails) => axios.post(`https://daraz-clone-api-springboot-production.up.railway.app/user`, userDetails)

export const retrieveAllusers = () => axios.get("https://daraz-clone-api-springboot-production.up.railway.app/users")

export const retriveCartOfUser = (id) => axios.get(`https://daraz-clone-api-springboot-production.up.railway.app/users/${id}/carts`)