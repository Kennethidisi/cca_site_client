import React, { useContext } from 'react'
import "./paymentStatus.css"
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import STUheader from '../../components/studentHeader/STUheader'
import PaymentTable from '../../components/paymentTable/PaymentTable'
import { myContext } from '../../context/AppContext'

export default function PaymentStatus() {
    const{theme} = useContext(myContext)
  return (
    <div className='payment_container' style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
        <LeftSideBar/>

        <div className="payment_right" style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
            <STUheader/>

            <div className='payment_title'>
                <h3>Payment Status</h3>
                <small className='payment_title_underline'></small>
            </div>

            <PaymentTable/>
            
        </div>
    </div>
  )
}
