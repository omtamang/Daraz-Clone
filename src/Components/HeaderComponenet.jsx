import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Security/AuthContext';
import { retriveCartOfUser } from './api/ApiService';

export default function HeaderComponent() {
  const authContext = useAuth()
  const id = authContext.id
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  function Logout() {
    navigate('/login')
    authContext.Logout()
  }

  async function fetchCart() {
    try {
      const response = await retriveCartOfUser(id)
      setCount(response.data.length)
    } catch (error) {
      console.log(error)
    }
  }

  const isAuthenticated = authContext.isAuthenticated

  useEffect (
    () => {
        fetchCart()
    }, []
  )

    return (
      <div className='bg-daraz content-around h-auto fixed z-40 w-full top-0'>
        <div className='mt-1'>
          <ul className='text-[12px] font-medium w-[550px] ml-[720px] flex justify-between text-white cursor-pointer '>
            <li className='hover:text-search_button'>SAVE MORE APP</li>
            <li className='hover:text-search_button'>BECOME A SELLER</li>
            <li className='hover:text-search_button'>HELP & SUPPORT</li>
            {!isAuthenticated && <li className='hover:text-search_button'><Link to={'/login'}>LOGIN</Link></li>}
            {!isAuthenticated && <li className='hover:text-search_button'><Link to={'/signup'}>SIGN UP</Link></li>}
            {isAuthenticated && <li className='hover:text-search_button' onClick={Logout}>LOGOUT</li>}
  
          </ul>
        </div>
  
        <div className='flex flex-row justify-center'>
  
          <div className='mr-[80px] mt-7'>
              <Link to={"/"}><img alt='' className='max-w-[130px]' src='https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png'></img></Link>
          </div>
  
          <div className='mt-5 mb-10'>
              <form class="flex flex-row">
                  <div class="flex">
                      <div class="relative w-[695px]">
                          <input type="search"id="search-dropdown" class=" h-11 block p-2.5 w-full z-20 text-sm bg-white rounded-e-lg dark:placeholder-gray-400 dark:text-black outline-none border rounded-sm" placeholder="Search in Daraz" required />
                          <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-daraz bg-search_button border border-search_button rounded-r-sm">
                              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg>
                              <span class="sr-only">Search</span>
                          </button>
                      </div>
                  </div>
              </form>
          </div>
  
          <div>
            <button className='text-white text-2xl ml-6 mr-[225px] mt-8'>
              <Link to={'/carts'}><FontAwesomeIcon icon={ faCartShopping } className='relative' />
               {isAuthenticated 
              && <span className='absolute top-9 right-[385px] font-bold text-white text-[14px]'>{count}</span>}
              </Link>
            </button>
          </div>
  
        </div>
      </div>
    );
  }