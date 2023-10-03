import React, { useContext, useEffect, useState } from 'react'
import './adminMessage.css'
import AdminLeftBar from '../../components/adminLeftBar/AdminLeftBar'
import STUheader from '../../components/studentHeader/STUheader'
import axios from 'axios'
import MsgBoxAdmin from '../../components/messageBoxAdmin/MsgBoxAdmin'
import { myContext } from '../../context/AppContext'

export default function AdminMessage() {
  const[adminMsg, setAdminMsg] = useState([])
  const{showNav} = useContext(myContext)
  
  const fetchMsg = async()=>{
    try {
      const res = await axios.get('https://cca-server-feyn.onrender.com/api/adminMsg')
      setAdminMsg(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
      fetchMsg()
  },[])

  return (
    <div className={showNav? 'adminMsg_container admin_help' : 'adminMsg_container'}>
        <AdminLeftBar/>

        <div className="admin_msg_right">
            <STUheader show={true}/>
            <div className='admin_msg_div'>

              <h2 className='msg_title'>Messages from Students</h2>

              {adminMsg[0]?
              adminMsg.map((msg)=>{
                return(
                  <MsgBoxAdmin key={msg._id} msg={msg}/>
                )
              }):

              <h1 className='no_msg'>No messages...</h1>
              } 


            </div>
        </div>
    </div>
  )
}
