
import React, { ReactElement } from 'react'

interface NavOptionsProps {
    title : string
    icon : ReactElement
}

const NavOptions : React.FC<NavOptionsProps> = ({title, icon}) => {
  return (
    <div className='flex flex-row justify-start items-center gap-5 py-3 px-10 w-full rounded-3xl hover:bg-black cursor-pointer transition-all'>
        {icon}
        <p className='text-sm'>{title}</p>
    </div>
  )
}

export default NavOptions