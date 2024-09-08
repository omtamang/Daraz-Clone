import HeaderComponent from "../HeaderComponenet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShareNodes, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Delivery from "./Delivery";
import Signpopup from "../Popups/Signpopup";
import Loginpop from "../Popups/Loginpop";

export default function Product() {
    const [colorFamily, setColorFamily] = useState("Home")
    const [price, setPrice] = useState("Rs. 249")
    const [discountper, setDiscountper] = useState("-50%")
    const [productCount, setProductCount] = useState(1)
    const [showLogpopup, setShowlogpopup] = useState(false)
    const [showSignpopup, setShowsignpopup] = useState(false)

    function changeToBath(){
        setColorFamily("Bathroom")
        setPrice("Rs. 246")
        setDiscountper("-51%")
    }

    function changeToHome(){
        setColorFamily("Home")
        setPrice("Rs. 249")
        setDiscountper("-50%")
    }

    function increaseQuantity(){
        setProductCount(productCount + 1)
    }

    function decreseQuantity() {
        if(productCount>1){
            setProductCount(productCount - 1)
        }
    }

    return (
        <div>
        <HeaderComponent />
            <div className="bg-[#eff0f5] pt-[125px]">
            
            <div className="bg-white max-w-[1180px] m-auto mt-8 h-auto">
                <div className="grid grid-cols-2 content-between">
                    <div className="flex w-[830px] h-[540px]">
                            {/* product image starts here */}
                        <div>
                            <img className="max-w-[340px] mt-2 ml-2" src="https://img.drz.lazcdn.com/static/np/p/aa7da682bf32f1cde878fe15c4eccd64.jpg_400x400q80.jpg_.webp"/>
                        </div>
                        {/* product image ends here */}

                        {/* product details */}
                        <div className="grid grid-rows-8 mr-1 ml-[13px]">
                            <div className="text-2xl max-w-[490px] mt-3 leading-7">
                                Super Absorbent Quick Dry Bathroom/Home Floor Mat
                            </div>

                            {/* stars */}
                            <div className="text-yellow-500 text-[11px] flex justify-between max-w-[490px] mt-8">
                                <div>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <a className="text-[13px] text-blue-600 hover:underline cursor-pointer">  221 Ratings</a>
                                </div>

                                <div className="text-lg text-gray-400 max-w-[490px]">
                                    <FontAwesomeIcon className="mr-2" icon={faShareNodes}/>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                            </div>
                            {/* Stars ends here */}

                            <div className="text-[13px] max-w-[490px]">
                                <p className="text-gray-400">Brand: <a className="text-blue-600 hover:underline cursor-pointer">No Brand</a> | 
                                <a className="text-blue-600 hover:underline cursor-pointer"> More Bath from No Brand</a></p>
                                <hr className="mt-4"/>
                            </div>

                            <div className="max-w-[490px] mt-[-15px]">
                                <p className="text-daraz text-3xl font-medium">{price}</p>
                                <p><strike className="text-gray-400 text-sm font-normal">
                                Rs. 500</strike> 
                                <span className="text-black text-sm font-normal">{discountper}</span></p>
                            </div>

                            <div className="max-w-[490px]">
                                <div className="text-gray-500 mb-3">
                                    Promotions
                                </div> 
                                <hr/>
                            </div>

                            <div className="grid grid-cols-2 content-between w-60 mt-[-15px]">
                                <div className="text-gray-500">
                                    Color Family
                                </div>
                                <div>
                                    <p> { colorFamily }</p>
                                    <div className="flex h-11 cursor-pointer mt-2">
                                        <img className="border hover:border-daraz mr-3" onClick={changeToHome} src="https://img.drz.lazcdn.com/static/np/p/aa7da682bf32f1cde878fe15c4eccd64.jpg_80x80q80.jpg_.webp"/>
                                        <img className="border hover:border-daraz" onClick={changeToBath} src="https://img.drz.lazcdn.com/static/np/p/db8e72e32677d14ef047f1a0d4050d80.jpg_80x80q80.jpg_.webp"/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex max-w-[240px] justify-between mt-6">
                                <p className="text-gray-500">Quantity</p>
                                <div className="flex justify-between">
                                    <FontAwesomeIcon onClick={decreseQuantity} 
                                    className="bg-gray-200 w-auto text-gray-400 h-5 p-1 hover:text-white hover:bg-gray-400 cursor-pointer"
                                     icon={faMinus}/>

                                    <p className="mr-4 ml-4">{productCount}</p>

                                    <FontAwesomeIcon onClick={increaseQuantity} 
                                    className="bg-gray-200 w-auto text-gray-400 h-5 p-1 hover:text-white hover:bg-gray-400 cursor-pointer"
                                    icon={faPlus}/>
                                </div>
                            </div>

                            <div className="text-white font-semibold flex justify-between cursor-pointer max-w-auto mt-3">
                                <button className="bg-[#30bcec] h-12 w-[228px] rounded-sm hover:bg-[#28acd4]" onClick={() => setShowlogpopup(true)}>Buy Now</button>
                                <button className="bg-daraz h-12 w-[228px] rounded-sm hover:bg-[#d8641c]">Add to Cart</button>

                            </div>
                            
                            <Loginpop trigger={showLogpopup} setTrigger={setShowlogpopup} setTrigger1={setShowsignpopup}> 

                            </Loginpop>

                            <Signpopup trigger={showSignpopup} setTrigger={setShowsignpopup} setTrigger2={setShowlogpopup}>

                            </Signpopup>
                        </div>

                    </div>
                    <Delivery/> 
                </div> 
            </div> 
        </div>
        </div>
    )
}