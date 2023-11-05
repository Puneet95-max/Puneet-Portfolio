import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useState,useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Typewriters from './Typewriters';



function First() {
    // const [isNavFixed, setIsNavFixed] = useState(False);
  
    // useEffect(() => {
    //   // Add a scroll event listener to track the scroll position
    //   const handleScroll = () => {
    //     if (window.scrollY >= window.innerHeight / 2) {
    //       setIsNavFixed(true);
    //     } else {
    //       setIsNavFixed(false);
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   // Clean up the event listener when the component unmounts
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
    
    
    return (
        <>
            <div className="bg-cover bg-center h-screen" //bg image div
                style={{
                    backgroundImage: `url('/bg1.jpg')`, //image path
                }}
            >
                <Navbar/>
                <main className='w-full flex flex-row'>
                    <div className='flex flex-row w-1/2'>
                        <div className=''>
                            <Image
                                src='/pp-removebg.png'
                                alt="Image description"
                                width={500} // Set the desired width
                                height={400} // Set the desired height
                            />
                        </div>
                    </div>
                    <div className='flex flex-col  w-1/2  '>
                        <span className='font-bold  text-red-500 text-4xl w-full mt-12  flex '>
                            Hello!
                        </span>

                        <div className='flex fllex-row my-9'>
                            <div className='text-white text-5xl font-bold'>I Am</div>
                            &nbsp;
                            &nbsp;
                            {/* <div className="typewriter text-white text-5xl font-bold font-serif">
                                <Typewriter
                                    options={{
                                        strings: ["Puneet", "Web Designer", "Web Developer"],
                                        autoStart: true,
                                        loop: true,
                                    }}

                                    delay={25} // Set the delay to 25 milliseconds (faster typing)
                                    deleteSpeed={50} // Set the delete speed to 50 milliseconds (faster deletion)
                                />
                            </div> */}

                            <Typewriters></Typewriters>
                        </div>

                        <div className='text-white'>
                            I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...
                        </div>

                        <div className='flex flex-row mt-6'>
                         <button className='border-2 bg-red-500 text-white rounded-full border-black hover:text-black py-2 px-7 m-4 ml-0'> Hire Me </button>
                         <button className='border-2 bg-red-500 text-white rounded-full border-black hover:text-black py-2 px-7 m-4'>View Work</button>
                        </div>
                    </div>

                </main>

            </div>
        </>
    )
}

export default First