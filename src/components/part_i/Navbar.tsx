import Image from 'next/image'
import React from 'react'
import NavOptions from './NavOptions'
import { Binary, Calendar, Home, LogOut, Presentation, User2 } from 'lucide-react'

const Navbar = () => {
  return (
    <div
    style={{boxShadow:'1px 1px 20px 1px #4400ff27'}}
    className='flex flex-col justify-between bg-slate-900/30  basis-4/12 border-[1px] border-white/20 rounded-3xl p-5 text-white'>
        <div className='flex flex-col items-center gap-12'>
            <p className='text-2xl font-bold'>Bill<span className='text-violet-500 drop-shadow-lg'>You</span>.</p>
            <div className='flex flex-col items-center gap-3'>
                <Image
                    src='/images/avi.png'
                    width={100}
                    height={100}
                    alt='avi'
                    className='bg-white rounded-full w-[60px] h-[60px] m-auto'
                />
                <div className='flex flex-col gap-1 items-center'>
                <p className='text-base font-semibold'>Shoumaydeep</p>
                <p className='text-xs font-light text-white/50'>Software Engineer</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <NavOptions icon={<Home size={15}/>} title='Dashboard' />
                <NavOptions icon={<Presentation size={15}/>} title='Projects'/>
                <NavOptions icon={<User2 size={15}/>} title='Teams'/>
                <NavOptions icon={<Binary size={15}/>} title='Planning'/>
                <NavOptions icon={<Calendar size={15}/>} title='Calendar'/>
            </div>
        </div>
        <div className='ml-[-10px] flex flex-row justify-center items-center gap-5 py-3 px-10 w-full rounded-3xl hover:bg-black cursor-pointer transition-all'>
            <LogOut size={15}/>
            <p className='text-sm'>Log out</p>
        </div>
    </div>
  )
}

export default Navbar