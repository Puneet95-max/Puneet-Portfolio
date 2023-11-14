import React from 'react'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Services from '@/pages/services/Services'

function Index() {
  return (
    <div>
      <section>
        <Home></Home>
      </section>
      <section>
        {/* <Second /> */}
        <About></About>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        {/* <Fourth/> */}
      </section>
    </div>
  )
}

export default Index