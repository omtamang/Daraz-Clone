import {  Link, useNavigate } from "react-router-dom";
import HeaderComponent from "../../HeaderComponenet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Footercmp from "../../footer/Footercmp";
import { useAuth } from "../../Security/AuthContext";
import { retrieveUsers } from "../../api/ApiService";

export default function Login(){
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

    return(
        <div className="bg-[#eff0f5] pb-8 pt-[130px]">
            <HeaderComponent/>
            <div className="flex max-w-[760px] m-auto justify-between items-center mt-11 mb-6">
                <h1 className="text-2xl text-gray-700">Welcome to Daraz! Please login.</h1>
                <p className="text-[13px] text-gray-500">New member? <Link className="text-[#1aa1c7]" to={"/signup"}>Register</Link> here.</p>
            </div>

            <div className="max-w-[760px] m-auto bg-white pt-3 mb-8 pb-8">
                <div className="max-w-[500px] m-auto mb-5">
                    <p className="font-bold"> Login with Password</p>
                </div>

                {error && <div className="w-[500px] m-auto bg-yellow-300 text-sm text-red-600 font-bold text-center p-1">
                    <p>Invalid Information</p>
                </div>}

                <Formik initialValues={{userName, password}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validateOnBlur={false}
                validateOnChange={false}
                >
                    {
                        (props) => (
                            <Form className="text-[13px] max-w-[500px] m-auto grid grid-rows-3 gap-7">
                                
                                <fieldset className="">
                                    <label>UserName*</label>
                                    <Field type="text" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="userName" placeholder="Please enter your username"/>
                                </fieldset>

                                <fieldset className="">
                                    <label className="flex justify-between">Password* <span className="text-[#1aa1c7] cursor-pointer">Forgot Password?</span></label>
                                    <Field type="password" className="w-full border border-gray-300 h-11 text-[16px] p-2 mt-1 outline-none" name="password" placeholder="Please enter your password"/>
                                </fieldset>

                                <div>
                                    <button className="w-full bg-daraz h-[50px] text-white font-semibold text-[16px] hover:bg-[#d8641c]" type="submit" >LOGIN</button>
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