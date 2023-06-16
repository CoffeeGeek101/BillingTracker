import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const TrackerParent = () => {
  return (
    <div className='flex basis-8/12 border-[1px] border-white/20 rounded-[30px] p-5'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default TrackerParent