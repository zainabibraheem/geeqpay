import React from 'react'
import '../App.css'
import totalOrder from '../assets/box-tick.png';
import totalRefund from '../assets/3d-rotate.png';
import averageSales from '../assets/shopping-cart.png';
import totalIncome from '../assets/coin.png';
import greenGraph from '../assets/group-3.png';
import trendingUp from '../assets/trending-up.png';
import trendingDown from '../assets/trending-down.png';
import redGraph from '../assets/group-4.png'



const Trends = () => {

  return (
    <div className='grid grid-cols-2 col-span-1 gap-[10px]'>
      <div className='bg-[#FFFFFF] border-[1px] bprder-[#EDF2F7] flex flex-col items-start justify-center gap-[4px] p-3 rounded-[14px]'>
        <div className='flex justify-between items-center w-full'>
          <img width={20} height={20} src={totalOrder} alt='box tick'/>
          <img height={20} src={greenGraph}  alt='graph'/>
        </div>
        
        <p className='m-0 text-md'>Total Order</p>

        <p className='m-0 text-xl font-semibold'>350</p>

        <div className='flex justify-between items-center w-full'>
          <div className='bg-[#34CAA531] flex items-center justify-center gap-1 text-[0.625rem] px-[8px] py-[4px] rounded-2xl '>
            <img  src={trendingUp} alt='trending-up'/>
            <p className='text-[#34CAA5] m-0 '>23.5%</p>
          </div>
          <p className='text-[0.75rem]'>vs. previous month</p>
        </div>

      </div>

      <div className='bg-[#FFFFFF] border-[1px] bprder-[#EDF2F7] flex flex-col items-start justify-center gap-[4px] p-3 rounded-[14px]'>
        <div className='flex justify-between items-center w-full'>
          <img src={totalRefund} alt='3d rotate'/>
          <img src={redGraph}  alt='graph'/>
        </div>
        
        <p className='m-0 text-md'>Total Refund</p>

        <p className='m-0 text-xl font-semibold'> 270</p>

        <div className='flex justify-between items-center w-full'>
          <div className='bg-[#ED544E26] flex items-center justify-center gap-1 text-[0.625rem] px-[8px] py-[4px] rounded-2xl'>
            <img  src={trendingDown} alt='trending-down'/>
            <p className='text-[#ED544E] m-0 '>23.5%</p>
          </div>
          <p className='text-[0.75rem]'>vs. previous month</p>
        </div>

      </div>

      <div className='bg-[#FFFFFF] border-[1px] bprder-[#EDF2F7] flex flex-col items-start justify-center gap-[4px] p-3 rounded-[14px]'>
        <div className='flex justify-between items-center w-full'>
          <img src={averageSales} alt='shopping cart'/>
          <img src={redGraph}  alt='graph'/>
        </div>
        
        <p className='m-0 text-md'>Average Sales</p>

        <p className='m-0 text-xl font-semibold'>1567</p>

        <div className='flex justify-between items-center w-full'>
          <div className='bg-[#ED544E26] flex items-center justify-center gap-1 text-[0.625rem] px-[8px] py-[4px] rounded-2xl'>
            <img  src={trendingDown} alt='trending-down'/>
            <p className='text-[#ED544E] m-0 '>23.5%</p>
          </div>
          <p className='text-[0.75rem]'>vs. previous month</p>
        </div>

      </div>

      <div className='bg-[#FFFFFF] border-[1px] bprder-[#EDF2F7] flex flex-col items-start justify-center gap-[4px] p-3 rounded-[14px]'>
        <div className='flex justify-between items-center w-full'>
          <img src={totalIncome} alt='coin'/>
          <img src={greenGraph}  alt='graph'/>
        </div>
        
        <p className='m-0 text-md'>Total Income</p>

        <p className='m-0 text-xl font-semibold'>$350.000</p>

        <div className='flex justify-between items-center w-full'>
          <div className='bg-[#34CAA531] flex items-center justify-center gap-1 text-[0.625rem] px-[8px] py-[4px] rounded-2xl'>
            <img  src={trendingUp} alt='trending-up'/>
            <p className='text-[#34CAA5] m-0 '>23.5%</p>
          </div>
          <p className='text-[0.75rem]'>vs. previous month</p>
        </div>

      </div>

    </div>
  )
}

export default Trends

