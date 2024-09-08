import Paymentmethods from "./Paymentmethods";


export default function Footercmp(){
    return (
        <div className="bg-[#f5f5f5] ">
            <div className="text-gray-600 flex justify-evenly pt-8 pb-6">
                <div className="ml-3">
                    <p className="text-black font-medium">Customer Care</p>

                    <div className="flex flex-col pt-2 text-[13px] cursor-pointer">
                        <a className="hover:underline">Help Center</a>
                        <a className="hover:underline">How to Buy</a>
                        <a className="hover:underline">Returns & Refunds</a>
                        <a className="hover:underline">Contact Us</a>
                    </div>
                </div>

                <div className="flex flex-col pt-2 cursor-pointer">
                    <p className="text-black font-medium">Daraz</p>

                    <div className="flex flex-col pt-2 text-[13px] cursor-pointer">
                        <a className="hover:underline">About Daraz</a>
                        <a className="hover:underline">Careers</a>
                        <a className="hover:underline">Daraz Blog</a>
                        <a className="hover:underline">Terms & Conditions</a>
                        <a className="hover:underline">Privacy Policy</a>
                        <a className="hover:underline">Digital Payments</a>
                        <a className="hover:underline">Daraz Customer University</a>
                        <a className="hover:underline">Daraz Affiliate Program</a>
                        <a className="hover:underline">Review & Win</a>
                        <a className="hover:underline">Meet the winners</a>
                        <a className="hover:underline">Daraz University</a>
                        <a className="hover:underline">Sell on Daraz</a>
                        <a className="hover:underline">Code of Conduct</a>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex h-12 pr-11">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_mvLAaX79gfJdolXO9YPBOqvMaEBEwHbzg&s"/>
                        <div className="font-medium pl-2">
                            <p className="text-daraz">Happy Shopping</p>
                            <p className="text-[13px]">Download App</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-auto h-11 flex">
                            <img className="pr-2 cursor-pointer" src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo-500x173.jpg"/>
                            <img className="cursor-pointer" src="https://www.designpieces.com/assets/wp-content/uploads/2016/02/google-play-badge.png"/>
                        </div>
                        <img className="h-11 w-[130px] mt-2 cursor-pointer" src="https://hellopaisa.co.za/hellopaisa-2021/wp-content/uploads/2021/06/huawei-Badge-Black.png"/>
                    </div>
                </div>
            </div>

            <Paymentmethods/>
        </div>
    );
}