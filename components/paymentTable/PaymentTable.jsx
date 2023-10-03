import React, { useContext } from 'react'
import "./paymentTable.css"
import { myContext } from '../../context/AppContext'

export default function PaymentTable() {
    const{ theme} = useContext(myContext)
  return (
    <div className='paymentTable_container' style={{backgroundColor: theme? '#222' : 'white', color: theme? 'whitesmoke' : "black"}}>
        <table className='paymentTable'  style={{backgroundColor: theme? '#222' : 'white', color: theme? 'darkorange' : "black"}}>
        <tbody>
            <tr >
                <th>Date</th>
                <th>Payment for</th>
                <th>Status</th>
                <th>Balance</th>
            </tr>

            <tr >
                <td style={{color: theme? 'whitesmoke' : "black"}} >25/12/24</td>
                <td style={{color: theme? 'whitesmoke' : "black"}}>Course</td>
                <td className='paid'>Paid</td>
                <td style={{color: theme? 'whitesmoke' : "black"}}>---</td>
            </tr>

            <tr>
                <td style={{color: theme? 'whitesmoke' : "black"}}>28/12/24</td>
                <td style={{color: theme? 'whitesmoke' : "black"}}>Course Material</td>
                <td className='paid'>Paid</td>
                <td style={{color: theme? 'whitesmoke' : "black"}}>---</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}
