import About from '@/components/About'
import Activities from '@/components/Activities'
import Hero from '@/components/Hero'
import Impact from '@/components/Impact'
import Join from '@/components/Join'

import React from 'react'

const page = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Impact/>
      <Activities/>
      <Join />
      
    </div>
  )
}

export default page