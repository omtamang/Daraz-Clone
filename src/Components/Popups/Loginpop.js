import {  Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../Security/AuthContext";

export default function Loginpop(props){
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    const authContext = useAuth()

    function onSubmit(value) {
        if(authContext.Login(value.userName, value.password)){
            setError(false)
            navigate("/")
        }
        else{
            setError(true)
        }
    }

    function validate(value) {
        let errors = {}

        if(error){
            errors.userName = "Invalid Username"
        }

        if(error){
            errors.password = "Invalid Password"
        }

        return errors
    }

    return (props.trigger) ? (
        <div className="fixed top-0 left-0 bg-gray-900 bg-opacity-50 pb-8 w-full h-screen z-50">
            <div className="mt-[130px]">

                <div className="relative max-w-[760px] m-auto bg-white pt-3 mb-8 pb-8">
                    <div className="w-[500px] m-auto justify-between items-center mt-2 mb-6">
                        <h1 className="text-2xl text-gray-700">Welcome to Daraz! Please login.</h1>
                        <p className="text-[13px] text-gray-500">New member? <Link className="text-[#1aa1c7]" onClick={() => {
                            props.setTrigger1(true)
                            props.setTrigger(false)
                        }}>Register</Link> here.</p>
                    </div>
                    <div className="max-w-[500px] m-auto mb-5">
                        <p className="font-bold"> Login with Password</p>
                    </div>

                    <Formik initialValues={{userName, password}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                    >
                        {
                            (props) => (
                                <Form className="text-[13px] max-w-[500px] m-auto grid grid-rows-3 gap-7">
                                    
                                    <fieldset className="">
                                        <label>UserName*</label>
                                        <Field type="text" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="userName" placeholder="Please enter your username"/>
                                        <ErrorMessage 
                                            name="userName"
                                            component="div"
                                            className="text-red-600"
                                        />
                                    </fieldset>

                                    <fieldset className="">
                                        <label className="flex justify-between">Password* <span className="text-[#1aa1c7] cursor-pointer">Forgot Password?</span></label>
                                        <Field type="password" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="password" placeholder="Please enter your password"/>
                                        <ErrorMessage 
                                            name="password"
                                            component="div"
                                            className="text-red-600"
                                        />
                                    </fieldset>

                                    <div>
                                        <button className="w-full bg-daraz h-[50px] text-white font-semibold text-[16px] hover:bg-[#d8641c]" type="submit" >LOGIN</button>
                                    </div>
                                </Form>
                            )
                        }

                    </Formik>
                    <div className="absolute top-[15px] right-[16px] text-gray-400 hover:text-black" onClick={() => props.setTrigger(false)}>
                        <button className="text-xl"><FontAwesomeIcon icon={faXmark}/></button>
                    </div>
                </div>
            </div>
        </div>
    ): "";
}