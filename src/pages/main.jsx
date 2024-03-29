import React from 'react'
import Trends from '../components/trends';
import Orders from '../components/orders';
import Platforms from '../components/platforms';
import Charts from '../components/charts';

const Main = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3 bg-[#FAFAFA] gap-5 py-[18px] px-[15px] grid-rows-auto'>
      
      <Charts />
      <Trends />
      <Orders/>
      <Platforms />
    </div>
  )
}

export default Main
