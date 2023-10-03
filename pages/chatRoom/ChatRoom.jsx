import React, { useContext, useEffect, useRef, useState } from 'react'
import "./chatRoom.css"
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import STUheader from '../../components/studentHeader/STUheader'
import { myContext } from '../../context/AppContext'
import SendIcon from '@mui/icons-material/Send';
import Message from '../../components/chatRoomMsgBox/Message'
import {io} from 'socket.io-client'
import axios from 'axios'

const socket = io("https://cca-socket-io.onrender.com")

export default function ChatRoom() {
  const{user, showNav, theme} = useContext(myContext)
  const[text, setText] = useState('')
  const[messages, setMessages] = useState([])
  const scrollRef = useRef(null)

  const fetchMsg = async()=>{
    try {
      const res = await axios.get('https://cca-server-feyn.onrender.com/api/stuMsg')
      setMessages(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
      fetchMsg()
  },[])

  
  // socket connection
  useEffect(()=>{
    socket.on('chat_message', (data)=>{
      setMessages((prev)=>{
        return [...prev, data]
      })
    })
    
  },[])


  const handleSend = async(e)=>{
    if(text === ""){
      return;
    }else{
      e.preventDefault();

    const newMsg = {
      name: user?.fullname,
      text: text,
      senderId: user?._id
    }

    socket.emit('chat', newMsg)

    try {
      const res = await axios.post('https://cca-server-feyn.onrender.com/api/stuMsg', newMsg)

      setMessages((prev)=>{
        return [...prev, res.data]
      })

    } catch (error) {
      console.log(error)
    }

    setText("")
    }
    
  }

   useEffect(()=>{
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
    },[messages])

  return (
    <div className={showNav? 'chatroom_container container_help' : 'chatroom_container'} style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
        <LeftSideBar/>

        <div className="chatroom_right" style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
            <STUheader/>

            <h3  style={{ color: theme? 'whitesmoke' : "black"}}>Student Chat Room</h3>

            <div className="chatContainer_div">

              <div className={theme? "chatContainer chatContainer_help" : "chatContainer"} ref={scrollRef}>
                {
                 messages[0]?
                  messages.map((msg, index)=>{
                    return <Message msg={msg} key={index} own={msg?.senderId === user?._id}/>
                  })

                  :

                  <div className='no_msg'><h1>Start a Conversation</h1></div>
                }
              </div>

              <div className="text_area">
                <textarea name="" id="" rows="1" placeholder='Start typing...' onChange={(e)=> setText(e.target.value)} value={text} style={{color: theme? 'white' : "#222"}}></textarea>
                <button className='chat_send' onClick={handleSend}><SendIcon className='chat_send_icon'/></button>
              </div>

            </div>
            
        </div>
    </div>
  )
}
