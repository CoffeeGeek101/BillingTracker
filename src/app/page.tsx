import TrackerParent from '@/components/part_i/TrackerParent'
import TimingsParent from '@/components/part_ii/TimingsParent'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex w-[100vw] h-[100vh] bg-zinc-900 p-5'>
      <TrackerParent/>
      <TimingsParent/>
    </div>
  )
}
