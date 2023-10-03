import React, { useEffect, useState } from 'react'
import "./msgBoxAdmin.css"
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';

export default function MsgBoxAdmin({msg}) {
    const[data, setData] = useState([])
    const[sender, setsender] = useState({})

    const fetchStudents = async()=>{
        try {
            const res = await axios.get('https://cca-server-feyn.onrender.com/api/cca')
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchStudents();
        const student = data.find((user)=> user._id === msg.senderId)
        setsender(student)
    },[data, msg.senderId])

  return (
    <div className="admin_msg">
        <h4>From {sender?.fullname}</h4>
        <div className='main_msg'>
            <p>{msg.message}</p>
            <div className='inputAndbtn'>
                <input type="text"  placeholder='Reply Message'/>
                <button><SendIcon className="sendIcon"/></button>
            </div>
        </div>
    </div>
  )
}
