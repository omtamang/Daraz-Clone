

import {  Link, useNavigate } from "react-router-dom";
import HeaderComponent from "../../HeaderComponenet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import Footercmp from "../../footer/Footercmp";
import { useAuth } from "../../Security/AuthContext";
import { retrieveAllusers, retrieveUsers } from "../../api/ApiService";

export default function Signup(){
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [userFound, setUserFound] = useState(false)
    const [data, setData] = useState([])

    const navigate = useNavigate()
    
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    async function onSubmit(value) {
       try {
            const response = await retrieveUsers(value.userName)

            const name = response.data[0].userName
            console.log(name)

            name === value.userName ? setUserFound(true) : setUserFound(false)

            if(userFound){
                // authContext.Sign(value.userName, value.password, value.phoneNumber)
                console.log("User not found")
                setUserFound(false)
            }
            else{
                setUserFound(true)
                console.log("user found")
            }

            if(isAuthenticated){
                navigate("/")
            }
       } catch (error) {
            console.error(error)
       }
    }

    function validate(value){
        let errors = {}

        if(value.phoneNumber.toString().length !== 10){
            errors.phoneNumber = "Phone number must be 10 digits."
        }

        if(value.userName.length<3){
            errors.userName = "Name must have 3 or more characters."
        }

        if(value.password.length<6){
            errors.password = "The length of the Password should be 6-50 characters."
        }

        if(userFound){
            errors.userName = "Username already taken."
        }
        return errors
    }
    return(
        <div className="bg-[#eff0f5] pb-8 pt-[130px]">
            <HeaderComponent/>
            <div className="flex max-w-[760px] m-auto justify-between items-center mt-11 mb-6">
                <h1 className="text-2xl text-gray-700">Create your Daraz Account</h1>
                <p className="text-[13px] text-gray-500">Already member?   <Link className="text-[#1aa1c7]" to={'/login'}>Login</Link> here.</p>
            </div>

            <div className="max-w-[760px] m-auto bg-white pt-3 mb-8 pb-8">

                <Formik initialValues={{userName, phoneNumber}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form className="text-[13px] max-w-[500px] m-auto grid grid-rows-3 gap-4">
                                
                                <fieldset className="">
                                    <label>Phone Number*</label>
                                    <Field type="number" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="phoneNumber" placeholder="Enter your phone number"/>
                                    <ErrorMessage 
                                        name="phoneNumber" 
                                        component="div" 
                                        className="w-full h-4 text-red-600"
                                        />
                                </fieldset>

                                <fieldset className="">
                                    <label className="flex justify-between">Full Name*</label>
                                    <Field type="text" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="userName" placeholder="First Last"/>
                                    <ErrorMessage
                                        name="userName"
                                        component="div"
                                        className="w-full h-4 text-red-600"
                                    />
                                </fieldset>

                                <fieldset className="">
                                    <label className="flex justify-between">Password*</label>
                                    <Field type="password" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="password" placeholder="Minimum 6 characters"/>
                                    <ErrorMessage 
                                        name="password"
                                        component="div"
                                        className="w-full h-4 text-red-600"
                                    />
                                </fieldset>

                                <div>
                                    <button className="w-full bg-daraz h-[50px] text-white font-semibold text-[16px] hover:bg-[#d8641c]" type="submit" >SIGN UP</button>
                                </div>
                            </Form>
                        )
                    }

                </Formik>
            </div>

            <Footercmp/>
        </div>
    )
}