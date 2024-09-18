import Footercmp from "../footer/Footercmp";
import HeaderComponent from "../HeaderComponenet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { retriveCartOfUser } from "../api/ApiService";
import { Link } from "react-router-dom";

export default function Cart(){
    const [productCount, setProductCount] = useState(1);
    const [data, setData] = useState(null)

    function decreseQuantity(){
        if(productCount>1){
            setProductCount(productCount-1);
        }
    }

    function increaseQuantity(){
        setProductCount(productCount+1);
    }

    async function fetchCart() {
        try {
            const response = await retriveCartOfUser(1001)
            const data = await response.data;
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCart();
    }, [])

    return (
        <div>
            <HeaderComponent/>
            <div className="pt-[150px] h-auto bg-[#f4f4f4]">
                {
                    data && data.length>0 ? 
                    data.map(
                        (item) => {
                           return <div className="bg-white flex justify-around w-[800px] m-auto  pt-4 mt-4 pb-4">
                                <div className="flex">
                                    <img className="w-[100px]" src={item.image_link}/>
                                    <Link to={item.product_link}><p className="text-sm">{item.title}</p></Link>
                                </div>
                                <div className="text-gray-400">
                                    <p className="text-daraz text-xl">Rs. {item.price}</p>
                                    <div className="flex justify-around text-xl pt-2 cursor-pointer">
                                        <FontAwesomeIcon icon={faHeart}/>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </div>
                                </div>
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
                        }
                    )
                        
                     : <div className="text-center font-bold text-xl">Cart Empty</div>
                }
            </div>
            <Footercmp/>
        </div>
    )
}