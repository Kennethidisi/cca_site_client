import React, { useContext } from 'react'
import "./message.css"
import { myContext } from '../../context/AppContext'


export default function Message({msg, own}) {
  const{theme} = useContext(myContext)
  return (
    <div className={own? 'my_message_div own' : 'my_message_div'} >
        <p className='msg_sender'>{msg?.name}</p>
        <div className='msg-msg' style={{backgroundColor: theme? '#111' : 'aliceblue'}}>
        <span className='main-msg' style={{color: theme? 'white' : 'black'}}>{msg?.text}</span>
        </div>
    </div>
  )
}
