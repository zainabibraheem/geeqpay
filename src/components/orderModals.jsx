import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdOutlineClose } from "react-icons/md";
import { RiFileDownloadLine } from "react-icons/ri";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 0
};

export default function OrderModals ({modalId, closeModal, rows}) {
   /* const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);*/

    const [modalInvoice, setModalInvoice] = useState({})

    useEffect(() => {
     
       const currentInvoice = rows.find((row) =>row.id === modalId )
       setModalInvoice(currentInvoice)
  
    }, [modalInvoice])

    return (
        <div>
        
            <Modal
                className='outline-0'
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-5'>
                                <h2>Invoice</h2>
                                <RiFileDownloadLine  />
                            </div>
                             <MdOutlineClose onClick={closeModal} />
                        </div>
                        <div>
                            <h2>Name: {modalInvoice.name} </h2>
                            <h2>Date: {modalInvoice.date}</h2>
                            <h2>Status:{modalInvoice.status}</h2>
                            <h2>Total Amount: ${modalInvoice.amount}</h2>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
