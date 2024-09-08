export default function Paymentmethods(){
    return (
        <div className="bg-white pt-6">
            <div className="flex justify-around max-w-[1140px]">
                <div className="">
                    Payment Methods 

                    <div className="h-10 flex justify-between mt-6">
                        <img className="border mr-1" src="https://www.shutterstock.com/image-illustration/cash-on-delivery-grunge-green-260nw-2240953107.jpg"/>
                        <img className="border mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJgC6P5DGy4tGSOYPR0iq0i3xQXxMS0K6ZQ&s"/>
                        <img className="border" src="https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/IME-Pay-Logo--1--09022018083210.jpg"/>
                    </div>
                </div>

                <div className="mt-11">
                    Verified by
                    <img className="h-11" src="https://getlogovector.com/wp-content/uploads/2019/10/pci-dss-compliant-logo-vector.png"/>
                </div>
            </div>

            <Darazinternational/>
        </div>
    )
}

function Darazinternational() {
    return (
        <div className="flex justify-evenly pt-11 pb-8 ">  
            <div className="w-45">
                <p className="pl-2">Daraz International</p>
                <div className="text-gray-600 text-sm flex cursor-pointer">
                    <div className="flex items-center m-2 hover:underline">
                        <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/3973/3973547.png"/>
                        <a><span>Pakistan</span></a>
                    </div>

                    <div className="flex items-center hover:underline">
                        <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/3973/3973498.png"/>
                        <a><span>Bangladesh</span></a>
                    </div>

                    <div className="flex items-center pl-2 hover:underline">
                        <img className="h-8 border rounded-full" src="https://st2.depositphotos.com/6836544/10998/v/950/depositphotos_109985024-stock-illustration-sri-lanka-national-flag.jpg"/>
                        <a><span className="pl-1">Sri Lanka</span></a>
                    </div>

                    <div className="flex items-center pl-2 hover:underline">
                        <img className="h-6" src="https://cdn-icons-png.flaticon.com/512/5372/5372855.png"/>
                        <a><span className="p-1">Myanmar</span></a>
                    </div>

                    <div className="flex items-center pl-2 hover:underline">
                        <img className="h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43myJ47Hm23ej3zZz_k398FpyrGcdE-ROCw&s"/>
                        <a><span className="pl-1">Nepal</span></a>
                    </div>
                </div>
            </div> 

            <div className="">
                <p className="ml-2">Follow Us</p>
                <div className="flex justify-evenly max-w-[250px] mt-1">
                    <img className="h-8 mr-2 mt-[2px]" src="https://logowik.com/content/uploads/images/633_facebook_icon.jpg"/>
                    <img className="h-6 mt-[6px] mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH--J-ZMUg8puNfUxE6YXQi3yVHuAORDxow&s"/>
                    <img className="h-9 mr-2" src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"/>
                    <img className="h-8 rounded-full" src="https://www.pngitem.com/pimgs/m/119-1197006_transparent-global-png-icon-vector-globe-png-png.png"/>
                </div>
            </div>

            <div className="text-gray-600">
                &copy; Daraz 2024
            </div>
        </div>
    )
}