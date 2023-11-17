import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='h-screen  w-full bg-slate-400' id='about'>
      <div className='flex flex-row w-full h-full'>
        <div className='w-1/2   flex justify-center flex-col m-'>

          <div className='flex text-4xl  ml-28 font-bold mx-20'> I Am Modern  &nbsp; <span className='text-red-500'>Web Desinger</span></div>
          <div className='flex  m-10 mx-20 ml-28 text-xl'>My name is Puneet.I am 21 Years old.I'm a person who is always ready to take up challenging projects and roles. I've designed & delivered projects from different tech stacks ranging from full stack development to web development and have experience in multiple languages/frameworks including but not limited to C++, Django, React JS, and Bootstrap</div>
          <div className='flex justify-between mx-28 text-xl'> <span className='font-bold mr-24'>Name :</span>     <span className='ml-10'>Puneet</span> </div>
          <div className='flex justify-between mx-28 text-xl'> <span className='font-bold'>Age :</span>   <span className='ml-10'>21</span></div>
          <div className='flex  justify-between mx-28 text-xl'> <span className='font-bold'>Email :</span> <span className='ml-10'>Puneet12345v@gmail.com </span>          </div>
          <div className='flex  justify-between mx-28 text-xl'><span className='font-bold' >Phone Number : </span>  <span className='ml-10'>9463894767</span></div>
        </div>
        <div className='w-1/2   mx-auto '>
          <div className='  mt-20 ' >


            <Image className='flex justify-center ml-7 '

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