import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { RiFileDownloadLine } from "react-icons/ri";

const OrdersModal = ({modalId, closeModal, rows}) => {
   
    const [modalInvoice, setModalInvoice] = useState({})

  useEffect(() => {
   
     const currentInvoice = rows.find((row) =>row.id === modalId )
     setModalInvoice(currentInvoice)

  }, [modalInvoice])

    return (
        <div>
            <div>
                <div>
                    <h2>Invoice</h2>
                    <RiFileDownloadLine onClick={closeModal} />
                </div>
                <MdOutlineClose />
            </div>
            <div>
                <h2>Name: {modalInvoice.name} </h2>
                <h2>Date: {modalInvoice.date}</h2>
                <h2>Status:{modalInvoice.status}</h2>
                <h2>Total Amount: ${modalInvoice.amount}</h2>
            </div>
        </div>
    )
}

export default OrdersModal
