import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faLocationDot, faTruck, faMoneyBill, faRotateRight, faShieldAlt, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function Delivery(){
    return(
        <div className=' w-auto ml-[260px] bg-white mb-11'>
            <div className='bg-[#fafafa]'>
                <div className='p-[15px] pt-6'>
                    <div className='flex flex-row justify-between text-[12px] font-medium text-gray-400'>
                        <p>Delivery Options</p>
                        <div className='ml-[160px] border h-4 w-4 border-gray-500 rounded-full'>
                            <FontAwesomeIcon icon={faInfo} className='pl-[5px] pb-[2px]'/>
                        </div>
                    </div>

                    <div className='flex justify-between items-center mt-3'>
                        <FontAwesomeIcon className='text-xl text-gray-400 mr-3' icon={faLocationDot}/>
                        <p className='text-[14px] font-normal leading-tight'>
                        Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad
                        </p>

                        <a className='text-[14px] text-blue-500 cursor-pointer ml-2'>CHANGE</a>
                    </div>
                </div>

                <hr className=''/>

                <div className='pr-[15px] pl-[15px]'>

                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex items-center'>
                            <FontAwesomeIcon className='text-xl text-gray-400' icon={faTruck}/>
                            <p className='text-[14px] ml-2 font-normal leading-5'>
                            Standard Delivery <br/> <span className='text-gray-400 text-[12px]'>Guaranteed by 26-27 Aug</span>
                            </p>
                        </div>

                        <a className='text-[14px] font-medium cursor-pointer ml-2'>Rs. 70</a>
                    </div>
                </div>

                <div className='p-[15px]'>
                    <div className='flex items-center'>
                        <FontAwesomeIcon className='text-xl text-gray-400' icon={faMoneyBill}/>
                        <p className='text-[14px] ml-2 font-normal leading-5'>
                        Cash on Delivery Available
                        </p>
                    </div>
                </div>

                <hr className='mt-2 mb-1'/>

                <div className='  p-[15px]'>
                    <div className='flex flex-row justify-between text-[12px] font-medium text-gray-400'>
                        <p>Return & Warranty </p>
                        <div className='ml-[160px] border h-4 w-4 border-gray-400 rounded-full'>
                            <FontAwesomeIcon icon={faInfo} className='pl-[5px] pb-[2px]'/>
                        </div>
                    </div>

                    <div className='flex items-center mt-3'>
                        <FontAwesomeIcon className='text-xl text-gray-400 mr-3' icon={faRotateRight}/>
                        <p className='text-[14px] font-normal leading-tight'>
                        14 Days Free Returns
                        </p>
                    </div>
                </div>

                <div className='pr-[15px] pl-[15px]'>
                    <div className='flex items-center mt-3'>
                        <FontAwesomeIcon className='text-xl text-gray-400 mr-3' icon={faShieldAlt}/>
                        <p className='text-[14px] font-normal leading-tight'>
                        Warranty not available
                        </p>
                    </div>
                </div>

                <hr className='mt-4'/>

                <div className='flex text-[13px] leading-4 pt-[15px] pl-[15px]'>
                    <img className='h-28' src='https://i.pinimg.com/originals/a8/69/40/a86940a4ed8a69539b341f3c414c47b3.png'/>

                    <div className='cursor-pointer bg-white w-[180px] h-auto shadow-xl border rounded-md p-3 before:content[]
                    before:bg-white before:h-11 before:w-11'>
                        <img className='h-9' src='https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01XrNYQP1paGCVispyM_!!6000000005376-2-tps-82-82.png'/>
                        <p className='text-gray-400 pt-1'>Download app to enjoy exclusive discounts!</p>
                    </div>
                </div>

                <div className='pl-4 flex items-center pt-1'>
                    <img className='h-4' src='https://cdn-icons-png.freepik.com/512/7344/7344300.png'/>
                    <span className='text-[13px] pl-[1px]'>Scan with Mobile</span>
                </div>
            </div>

            <div className='flex p-[15px] mt-1 justify-between'>
                <p className='text-[13px] text-gray-400'>Sold by<br/> <span className='text-[15px] text-black'>Flash Sale</span></p>

                <span className='font-medium text-sm text-blue-600'><FontAwesomeIcon icon={faMessage}/> Chat</span>
            </div>
            <hr/>

            <div className='flex items-center'>
                <div className='p-3 border-r border-b'>
                    <p className='text-[13px] text-gray-500'>Positive Seller Ratings</p>
                    <p className='text-center pt-1 text-3xl'>80%</p>
                </div>

                <div className='p-3 border-r border-b w-28'>
                    <p className='text-[13px] text-gray-500'>Ship on Time</p>
                    <p className='text-center pt-1 text-3xl'>97%</p>
                </div>

                <div className='p-3 border-b'>
                    <p className='text-[13px] text-gray-500'>Chat Response Rate</p>
                    <p className='text-center pt-1  text-3xl'>95%</p>
                </div>
            </div>

            <div className='flex justify-center items-center h-[50px] text-blue-600 text-[13px] font-medium cursor-pointer hover:underline'>
            GO TO STORE
            </div>
        </div>
    )
}

