import React from 'react'
import {  Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path);
    setShowMenu(false);
  }
  
  const [opacity, setOpacity] = useState('bg-opacity-40');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const targetScrollY = window.innerHeight * 0.3; // 30% of the viewport height
      if (currentScrollY > targetScrollY) {
        setOpacity('bg-opacity-70');
      } else {
        setOpacity('bg-opacity-30');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative flex flex-col w-screen h-screen'>
       <div className='z-50'>
       <div className={`
                       h-auto w-screen
                       flex flex-row justify-between md:justify-center items-center flex-shrink
                       px-4 py-3
                       bg-white ${opacity} transition duration-500 shadow-xl`}>
        <div className=''>
          <img 
            src="/assets/empirelogo.png" 
            alt="Empire Health Logo"
            className='w-48 z-10' />
        </div>
        <div className='hidden md:block z-10'>
          <ul className='list-none flex flex-row
                         font-Poppins text-sm font-bold
                         pt-8'>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 pb-4 hover:cursor-pointer' onClick={() => navigate('/')}>
                HOME
            </li>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 pb-4 hover:cursor-pointer' onClick={() => navigate('/About-Us')}>
                ABOUT US
            </li>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 pb-4 hover:cursor-pointer' onClick={() => navigate('/Services')}>
                SERVICES
            </li>
            <li className='flex justify-center items-center hover:text-empireyellow px-2 pb-4 hover:cursor-pointer' onClick={() => navigate('/Intake')}>
                INTAKE FORM
            </li>
          </ul>
        </div>
        <div className='md:hidden'>
        <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-8 h-8"
                onClick={() => setShowMenu(!showMenu)}
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
       </div>
       </div>
       {showMenu && (
        <div className="absolute top-0 right-0 w-screen y-screen z-50 md:hidden">
          <div className='bg-stone-800 bg-opacity-80 z-40 w-screen h-screen fixed'>
          <div className='fixed flex flex-col bg-white bg-opacity-100 w-10/12 h-screen px-4 py-2 z-auto animate-slide'>
          <ul className='list-none flex flex-col
                         font-Poppins text-2xl font-bold
                         pt-12 gap-4'>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/')}>
                HOME
            </li>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/About-Us')}>
                ABOUT US
            </li>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/Services')}>
                SERVICES
            </li>
            <li className='flex justify-start items-center hover:text-empireyellow px-2' onClick={() => handleClick('/Intake')}>
                INTAKE FORM
            </li>
          </ul>
            <div className='absolute top-10 right-10 z-auto'>
            <svg 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
              className="w-8 h-8"
              onClick={() => setShowMenu(!showMenu)}>
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
            </div>
          </div>
          </div>
        </div>
       )}
       <div>
        <Outlet />
       </div>
       <div className="w-full h-auto bg-gray-700 flex flex-row p-8">
            <div className="text-white font-Poppins flex flex-col flex-grow justify-start items-start">
            <h1 className=" font-bold text-lg">Phone Number</h1>
            <a href="tel:+1 (818) 638-3088">
            <h2 className="font-thin text-md hover:cursor-pointer hover:text-empireblue">US: +1 (818) 638-3088</h2>
            </a>
            <h1 className=" font-bold text-lg">Fax Number</h1>
            <a href="tel:(818) 898-1108">
            <h2 className="font-thin text-md hover:cursor-pointer hover:text-empireblue">(818) 898-1108</h2>
            </a>
              <h1 className=" font-bold text-lg">Address</h1>
            <a href="Address: 12062 Valley View St Ste. 225B Garden Grove, CA 92845">
            <h2 className="font-thin text-md hover:cursor-pointer hover:text-empireblue">12062 Valley View St Ste. 225B Garden Grove, CA 92845</h2>
            </a> 
            </div>
            <div className="text-white font-Poppins flex flex-col flex-grow justify-start items-start">
            <h1 className=" font-bold text-lg">E-mail Address</h1>
            <a href="mailto:info@empirehsi.com">
            <h2 className="font-thin text-mb hover:cursor-pointer hover:text-empireblue">info@empirehsi.com</h2>
            </a>
            </div>
        </div>
       <div className='w-screen h-auto bg-black flex justify-center items-center text-white text-sm font-Poppins px-10 py-4'>
        <span className='text-center'>Copyright © 2023 Empire Health Systems. All Rights Reserved.</span>
       </div>
    </div>
  )
}

export default App
