import React from 'react'
import Image from 'next/image';
import Typewritter from '@/components/Typewritter';
import Navbar from '@/components/navbar/Navbar';


function Home() {
    
    return (
        <>
            <div className="bg-cover bg-center h-screen" //bg image div
                style={{
                    backgroundImage: `url('/bg1.jpg')`, //image path
                }}
            >
                
                <Navbar></Navbar>
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
                           {/* <Typewriters/> */}
                        <Typewritter></Typewritter>
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

export default Home