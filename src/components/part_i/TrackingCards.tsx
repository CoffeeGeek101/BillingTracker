import { ArrowRightToLine } from 'lucide-react';
import React, { ReactElement } from 'react'

interface TrackingCardsProps {
    title: string,
    stats : string,
    icon : ReactElement,
    color: string
    buttonLabel : string
}


const TrackingCards : React.FC<TrackingCardsProps> = ({title,buttonLabel,color,icon,stats}) => {

    const bgColor = color === 'pink' ? 'bg-[#f383ff]' : 'bg-[#bd39ffca]';

  return (
    <div 
    style={{boxShadow: `0px 0px 12px 0px ${color === 'pink' ? '#f383ff' : '#bd39ffca'}`}}
    className={`${bgColor} min-w-[240px] min-h-[180px] bg-slate-800 rounded-[35px] flex flex-col gap-4 relative p-5`}>
        <div className='absolute right-5 bg-slate-50/40 p-2 rounded-full'>{icon}</div>
        <p className='text-5xl font-light font-sans'>{stats}</p>
        <p className='font-semibold'>{title}</p>
        <button className='bg-white text-violet-800 w-[50%] p-2 rounded-full text-xs font-semibold flex flex-row items-center justify-center gap-3 hover:cursor-pointer'>
            {buttonLabel}
            <ArrowRightToLine size={14}/>
        </button>
    </div>
  )
}

export default TrackingCards