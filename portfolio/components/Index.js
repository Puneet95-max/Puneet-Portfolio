import React from 'react'
import First from './First/First'
import Second from './Second/Second'
import Third from './third/Third'
import Fourth from './fourth/Fourth'

function Index() {
  return (
    <div>
      <section>
        <First />
      </section>
      <section>
        <Second />
      </section>
      <section>
        <Third/>
      </section>
      <section>
        <Fourth/>
      </section>
    </div>
  )
}

export default Index