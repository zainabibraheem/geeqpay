import React from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Charts = () => {

  const [sortValue, setSortValue] = useState('Monthly')

  const [sortOpen, setSortOpen] = useState(false);

  const toggleSort = () => {
    setSortOpen(!sortOpen)
  }

  const closeSort = () => {
    setSortOpen(false)
  };

  const dailySort = () => {
    setSortValue('Daily'),
      closeSort()
  };


  const weeklySort = () => {
    setSortValue('Weekly'),
      closeSort()
  };


  const monthlySort = () => {
    setSortValue('Monthly'),
      closeSort()
  }

  const options = {
    chart: {
      type: 'bar',

    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    fill: {
      colors: ['#34cAA540']
    },
    plotOptions: {
      bar: {
        colunmWidth: '30px',
        borderRadius: 15,
        borderRadiusApplication: 'end',
      }
    },
    dataLabels: {
      enabled: false,
    },

    series: [
      {
        name: '',
        data: [6500, 21000, 8000, 28000, 9000, 45000, 9000, 23000, 32000, 7000, 30000, 26000,],

        // Specify a single color for all bars
      }
    ],

  };


  return (
    <div className='col-span-2 bg-[#fff] border-[1px] border-[#edf2f7] rounded-xl  p-4'>
      <div className='flex justify-between'>
        <h2 className='font-[600] text-[1.125rem] text-[#3A3F51]'>Sales Trends</h2>
        <div className='flex gap-2 items-center text-sm'>
          <p>Sort by:</p>
          <div>
            <div onClick={toggleSort} className='flex text-[13px] gap-1 cursor-pointer items-center border rounded-full px-2 py-1'>
              <p>{sortValue} </p>
              {sortOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {sortOpen &&
              <div className='fixed top-[140px] p-1 z-30 cursor-pointer bg-[#FFF] border-[1px] border-[#DADDDD] py-1 rounded-sm'>
                <p onClick={dailySort}  className='px-4 py-1 text-[13px] hover:bg-[#f0e7e7] '>Daily</p>
                <p onClick={weeklySort} className='px-4 py-1 text-[13px] hover:bg-[#f0e7e7]'>Weekly</p>
                <p onClick={monthlySort} className='px-4 py-1 text-[13px] hover:bg-[#f0e7e7]'>Monthly</p>
                
              </div>}
          </div>
        </div>
      </div>
      <div>
        <Chart options={options} series={options.series} type='bar' height={320} />
      </div>
    </div>
  )
}

export default Charts
