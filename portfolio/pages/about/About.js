import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className='h-screen  w-full bg-slate-400 px-4 ' id='about '>
      <div className='flex flex-row w-full h-full mx-2'>
        <div className='w-2/3 pt-0  flex justify-center flex-col  mx-10 '>
         
         <div className='flex flex-row items-center justify-center px-16 mt-0'> 
          <p className='text-5xl font-semibold  '>I Am Modern</p>
          <h2 className='text-5xl font-semibold  text-red-500 '> &nbsp;Web Designer</h2>
         </div>
          {/*<div className='flex text-4xl  ml-28 font-bold mx-20'> I Am Modern  &nbsp; <span className='text-red-500'>Web Desinger</span></div>*/}

          <div className='flex flex-row items-center justify-center px-12 pt-12'>
            <p className='mb-4 text-lg font-semibold text-black/75 uppercase mx-8 my-4 flex flex-row items-center justify-between'>
            My name is Puneet.I am 21 Years old.I'm a person who is always ready to take up challenging projects and roles. I've designed & delivered projects from different tech stacks ranging from full stack development to web development and have experience in multiple languages/frameworks including but not limited to C++, Django, React JS, and Bootstrap
            </p>
          </div>
         {/* <div className='flex  m-10 mx-20 ml-28 text-2xl'>My name is Puneet.I am 21 Years old.I'm a person who is always ready to take up challenging projects and roles. I've designed & delivered projects from different tech stacks ranging from full stack development to web development and have experience in multiple languages/frameworks including but not limited to C++, Django, React JS, and Bootstrap</div>*/}
        <div className='flex flex-col mt-10' >
         <div className='flex flex-row items-center justify-between px-24 mt-0'> 
          <p className='text-2xl font-semibold  flex flex-row items-start justify-start mx-12'>Name :</p>
          <h2 className='text-2xl font-semibold  text-black/75 flex flex-row items-center justify-center mx-12'> &nbsp;Puneet</h2>
         </div>
         <div className='flex flex-row items-center justify-between px-24 mt-0'> 
          <p className='text-2xl font-semibold  flex flex-row items-start justify-start mx-12'>Age :</p>
          <h2 className='text-2xl font-semibold  text-black/75 flex flex-row items-center justify-center mx-12'> &nbsp;21</h2>
         </div>
         <div className='flex flex-row items-center justify-between px-24 mt-0'> 
          <p className='text-2xl font-semibold  flex flex-row items-start justify-start mx-12'>Email :</p>
          <Link href="Puneet12345v@gmail.com" className='text-2xl font-semibold  text-black/75 flex flex-row items-center justify-center mx-12'> &nbsp;Puneet12345v@gmail.com</Link>
         </div>
         <div className='flex flex-row items-center justify-between px-24 mt-0'> 
          <p className='text-2xl font-semibold  flex flex-row items-start justify-start mx-12'>Phone Number :</p>
          <h2 className='text-2xl font-semibold  text-black/75 flex flex-row items-center justify-center mx-12'> &nbsp;9463894767</h2>
         </div>
         <div className=' flex items-center justify-center mt-10'>
         <Link href='/' target='_blank' className='flex items-center bg-red-500 text-white p-2 px-6 rounded-full text-lg font-semibold  hover:text-black border-2 border-solid border-black hover:border-dark md:p-2 md:px-4 md:text-base' 
           download={true}
          >Download CV
          
          
          </Link>
          </div>
         </div>

          {/*<div className='flex justify-between mx-28 text-xl'> <span className='font-bold mr-24'>Name :</span>     <span className='ml-10'>Puneet</span> </div>
          <div className='flex justify-between mx-28 text-xl'> <span className='font-bold'>Age :</span>   <span className='ml-10'>21</span></div>
          <div className='flex  justify-between mx-28 text-xl'> <span className='font-bold'>Email :</span> <span className='ml-10'>Puneet12345v@gmail.com </span>          </div>
          <div className='flex  justify-between mx-28 text-xl'><span className='font-bold' >Phone Number : </span>  <span className='ml-10'>9463894767</span></div>*/}
        </div>
        <div className='w-1/3    '>
          <div className='  mt-20 mx- 8' >


            <Image className='flex justify-center my-6 rounded-lg '

              src='/PP.png'
              alt="Image description"
              width={450} // Set the desired width
              height={350} // Set the desired height

            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About