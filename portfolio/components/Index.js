import React from 'react'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Services from '@/pages/services/Services'
import Secure56 from '@/pages/secure56/Secure56'
import Blank from '@/pages/secure56/Blank'
import ScrollComponent from '@/pages/secure56/ScrollComponent'

function Index() {




  return (
    <div>
      {/* 
      <section>
        <Home></Home>
      </section>
      <section>
       
        <About></About>
      </section>
      <section>
        <Services></Services>
      </section> */}


      <section>
        <Blank></Blank>
        <ScrollComponent></ScrollComponent>
        <Blank></Blank>

      </section>
    </div>
  )
}

export default Index