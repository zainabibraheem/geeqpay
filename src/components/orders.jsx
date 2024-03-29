import { useState, useEffect } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import downloadInvoice from '../assets/download-icon.png';
import OrderModals from './orderModals';


function createData(
  id, image, name, date, amount, status, invoice,
) {
  return {id, image, name, date, amount, status, invoice, };
}

const rows = [
  createData(1, pic1, 'Marcus Bergson', 'Nov 15, 2023', '80,000', 'paid'),
  createData(2, pic2, 'Jaydon Vaccaro', 'Nov 15, 2023', '150,000', 'refund'),
  createData(3, pic3, 'Corey Schleifer', 'Nov 14, 2023', '87,000', 'paid' ),
  createData(4, pic4, 'Cooper Press', 'Nov 11, 2023', '100,000', 'refund' ),
  createData(5, pic5, 'Phillip Ludin', 'Nov 19, 2023', '78,000', 'paid',),
];

function changeStatusColor(status) {
   if (status === 'paid') { return {
    color: '#34CAA5' ,
   }
  }
  
  else {
    return {
      color: 'red',
    }
   }

  }

const Orders = () => {

  const [modalState, setModalState] = useState(false);
  const [modalId, setModalId] = useState(0);

   /*const openModal = () => {
    setModalState(true)
   }

   const handleModalId = () => {
    setModalId(id)
   }*/

    const handleModal = (id) => {
      setModalId(id)
      setModalState(true)
      
     }
  

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className='col-span-2 bg-[#fff] border-[#edf2f7] rounded-[14px] border-[1px] px-[1.25rem] py-[1.125rem]'>
      <div className='flex justify-between items-center'>
        <h2 className='font-[600] text-[1.125rem] text-[#3A3F51]'>Last Orders</h2>
        <p className='text-[1.125rem] font-[500] text-[#090e0c]'>See All</p>
      </div>
      <TableContainer className='border-0' component={Paper}>
        <Table className='border-0' sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead className='border-none'>
            <TableRow className='border-none  '>
              <TableCell className='border-b-[1px] py-[1rem] text-[#9ca4ab] border-[#edf2f6] font-[2500]'>Name</TableCell>
              <TableCell className='border-none py-[1rem] text-[#9ca4ab]'>Date</TableCell>
              <TableCell className='border-none py-[1rem] text-[#9ca4ab]'>Amount</TableCell>
              <TableCell className='border-none py-[1rem] text-[#9ca4ab]'>Status</TableCell>
              <TableCell className='border-none py-[1rem] text-[#9ca4ab] '>Invoice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='border-none'>
            {rows.map((row) => (
              <TableRow
                className='border-none'
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='font-[500] text-[#3a3f51] py-[1rem]' component="th" scope="row">
                  <div className='flex gap-[10px] items-center'>
                    <img src={row.image} />
                    {row.name}
                  </div>
                </TableCell>
                <TableCell className='text-[#737373]'>{row.date}</TableCell>
                <TableCell className='text-[#000000] font-[600]'>${row.amount}</TableCell>
                <TableCell style={changeStatusColor(row.status)}>{row.status}</TableCell>
                <TableCell align="left">
                  <div className='flex gap-[10px]' onClick={() => handleModal(row.id)} >
                    <img src={downloadInvoice} alt='download invoice' width={20} height={20} />
                    <p className='text-[#0d062d]'>view</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {modalState && <OrderModals closeModal={closeModal} modalId={modalId} rows={rows}/>}
    </div>
  )
}


export default Orders

