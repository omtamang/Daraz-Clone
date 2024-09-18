import { createContext, useContext, useState } from "react";
import { addUser, retrieveUsers } from "../api/ApiService";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [fromLogin, setFromlogin] = useState(false)
    const [fromSignup, setFromsignup] = useState(false)
    const [id, setId] = useState(null)
    const [data, setData] = useState([])
    
    async function Login(username, password) {
        try {
            const response = await retrieveUsers(username)
            setData(response.data[0])

            if(data.userName===username && data.password === password){
                setId(data.id)
                setFromlogin(true)
                setAuthenticated(true)
                return true
            }
            else{
                setFromlogin(false)
                setAuthenticated(false)
                return false
            }
        } catch (error) {
            
        }
    }

    async function Sign(username, password, phone){
        const user = {
            userName: username,
            password: password,
            phoneNumber: phone
        }
        
        try {
            const response = await addUser(user)
            setAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    function Logout() {
        setId(null)
        setAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, Login, Logout, Sign, id} }>
            {children}
        </AuthContext.Provider>
    )
}