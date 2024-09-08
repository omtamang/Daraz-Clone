import { useNavigate } from "react-router-dom"


export default function FlashSale() {
    const navigate = useNavigate()
    function Flash_product_1(){
        navigate('/product')
    }

    return (
        <div className="bg-[#f5f5f5]">

            <div className="m-auto w-[1140px] pt-7">
                <div className="text-2xl font-normal text-slate-800">
                    Flash Sale
                </div>
            </div>

            <div className="m-auto w-[1140px] bg-white mt-2 cursor-pointer">
                <div className="flex justify-between p-4">
                    <div className="text-daraz font-semibold cursor-text">On Sale Now</div>
                    <div><button className="text-daraz font-semibold border p-1 border-daraz rounded-sm">SHOP ALL PRODUCTS</button></div>
                </div>
                <div>
                    <hr/>
                </div>

                <div className="">
                    <div className="w-auto flex flex-row justify-between pt-2 pb-6">
                        <div className="max-w-[180px] hover:shadow-md" onClick={Flash_product_1}>
                            <img src="https://img.drz.lazcdn.com/static/np/p/aa7da682bf32f1cde878fe15c4eccd64.jpg_400x400q80.jpg_.webp"/>
                            <div className="p-1">
                                <p>Super Absorbent Quick Dry Bathroom Floor Mat</p>
                                <p className="text-daraz text-xl">Rs. 246</p>
                                <p className="text-sm"><strike className="text-slate-500">Rs.500</strike>   -51%</p>
                            </div>
                        </div>

                        <div className=" max-w-[180px] hover:shadow-md">
                            <img src="https://img.drz.lazcdn.com/static/np/p/e9e36c9f02b84c8c090df385371f0228.jpg_400x400q80.jpg_.webp"/>
                            <p>10Kg Digital Weighing Machine Free Battery</p>
                            <p className="text-daraz text-xl">Rs. 470</p>
                            <p className="text-sm"><strike className="text-slate-500">Rs.800</strike>   -41%</p>
                        </div>

                        <div className=" max-w-[180px] hover:shadow-md">
                            <img src="https://img.drz.lazcdn.com/static/np/p/5116df5cb72e2cbb2a58dd304d3836aa.png_400x400q80.png_.webp"/>
                            <p>Pack of 6 Pairs Cotton Ankle Socks For Men</p>
                            <p className="text-daraz text-xl">Rs. 333</p>
                            <p className="text-sm"><strike className="text-slate-500">Rs.899</strike>   -63%</p>
                        </div>

                        <div className=" max-w-[180px] hover:shadow-md">
                            <img src="https://img.drz.lazcdn.com/static/np/p/8db204e561a96f8f62630ec40e9fc6a0.jpg_400x400q80.jpg_.webp"/>
                            <p>Men Tactical Belt Quick Release Military Army</p>
                            <p className="text-daraz text-xl">Rs. 300</p>
                            <p className="text-sm"><strike className="text-slate-500">Rs.750</strike>   -60%</p>
                        </div>

                        <div className=" max-w-[180px] hover:shadow-md">
                            <img src="https://img.drz.lazcdn.com/static/np/p/c9d638cfa9c840706b10c400fb06acd5.jpg_400x400q80.jpg_.webp"/>
                            <p>LAO GAN MA Tao Huabi Chilli Sauce With Chicken</p>
                            <p className="text-daraz text-xl">Rs. 405</p>
                            <p className="text-sm"><strike className="text-slate-500">Rs.499</strike>   -19%</p>
                        </div>

                        <div className=" max-w-[180px] hover:shadow-md">
                            <img src="https://img.drz.lazcdn.com/static/np/p/f251628b62ac5da48a09c6fc4f7626a9.jpg_400x400q80.jpg_.webp"/>
                            <p>Asta WOLF COBRA Wireless Earbuds</p>
                            <p className="text-daraz text-xl">Rs. 1,549</p>
                            <p className="text-sm"><strike className="text-slate-500">Rs.500</strike>   -51%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}