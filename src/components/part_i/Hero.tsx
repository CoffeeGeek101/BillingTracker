import React from 'react'
import TrackingCards from './TrackingCards'
import { FileCheck, Folder } from 'lucide-react'

const Hero = () => {
  return (
    <div className='basis-9/12 flex flex-col p-6 text-white'>
        <div className='flex flex-col gap-8'>
          <p className='text-4xl'>Activity Tracking.</p>
          <div className='flex flex-row justify-start gap-5'>
           <TrackingCards buttonLabel='START' color='pink' icon={<Folder/>} stats='13' title='Task remaining' />
           <TrackingCards buttonLabel='REVIEW' color='violet' icon={<FileCheck/>} stats='115' title='Completed Task' />
          </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hero