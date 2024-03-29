import React from 'react';
import { platformData } from '../data'


const Platforms = () => {

  const newPlatformData = platformData.map((data) => {
    const { id, price, value, title, percentage, color } = data

    const style = {
      width: percentage,
      height: '0.75rem',
      backgroundColor: color,
      borderRadius: '2.5rem',
    }


    return (
      <div key={id}>
        <div className='flex flex-col gap-2'>
          <p className='text-[#22242C] font-[600] text-lg '>{title}</p>
          <div className='w-[] bg-[#F5F5F5] h-[0.75rem] rounded-[2.5rem] ' >
            <div style={style}></div>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-[525252] '> ${price}</p>
            <p className='text-[525252] '>+{value}%</p>
          </div>
        </div>
      </div>
    )
  })


  return (
    <div className='flex flex-col bg-[#FFFFFF] gap-[1.125rem] border-[1px] border-[#EDF2F7] rounded-lg p-[1rem] '>
      <div className='flex items-center justify-between'>
        <h2 className='text-[#26282C] font-[600] text-lg'>Top Platform</h2>
        <p className='text-[#34CAA5] font-[500] text-lg'>See All</p>
      </div>
      <div className='flex flex-col gap-5'>
        {newPlatformData}
      </div>
    </div>
  )
}

export default Platforms
