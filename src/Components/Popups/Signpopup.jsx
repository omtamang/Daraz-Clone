import { ErrorMessage, Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Signpopup(props) {
    
    return (props.trigger) ? (

        <div>
            <div className="fixed h-screen w-full top-0 left-0 bg-gray-900 pt-[120px] bg-opacity-30 z-50">
                <div className="relative w-full bg-white max-w-[760px] m-auto pt-3 mb-8 pb-8">

                <div className=" w-[500px] m-auto items-center mt-8 mb-6">
                    <h1 className="text-2xl text-gray-700">Create your Daraz Account</h1>
                    <p className="text-[13px] text-gray-500">Already member?   <Link className="text-[#1aa1c7]" onClick={() => {
                        props.setTrigger(false)
                        props.setTrigger2(true)
                    }}>Login</Link> here.</p>
                </div>

                <Formik initialValues={{}}
                enableReinitialize={true}
                // onSubmit={onSubmit}
                // validate={validate}
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

                <button 
                    className="text-xl absolute top-[16px] right-[16px] hover:text-black text-gray-400" 
                    onClick={() => props.setTrigger(false)}>

                    <FontAwesomeIcon icon={faXmark}/>

                </button>

                </div>

            </div>
        </div>
    ) : "";
}