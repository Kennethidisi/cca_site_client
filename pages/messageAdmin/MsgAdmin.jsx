import React, { useContext, useRef } from 'react'
import './mAdmin.css'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import STUheader from '../../components/studentHeader/STUheader'
import { myContext } from '../../context/AppContext'
import axios from 'axios'

export default function MsgAdmin() {

  const{showNav, user, theme} = useContext(myContext)
  const textRef = useRef(null)

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(textRef.current.value === ""){
      textRef.current.style.border = '1px solid red'
      return;
    }else{
      textRef.current.style.border = '1px solid silver'
      try {
        await axios.post('https://cca-server-feyn.onrender.com/api/adminMsg', {senderId: user._id, message: textRef.current.value}).then(()=>{
          textRef.current.value = ""
          alert('Message sent')
        })
      } catch (error) {
        console.log(error)
      }

    }

  }

  return (
    <div className={showNav? 'msgAmin_container container_help' : 'msgAmin_container'} style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
        <LeftSideBar/>

        <div className="msgAdmin_right_container" style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
            <STUheader/>

            <div className='msgAdmin_title'>
                <h3>Send Admin a message</h3>
                <span className='msgAdmin_underline'></span>
            </div>

            <form className='msgAdmin_form' onSubmit={handleSubmit} style={{backgroundColor: theme? '#222' : 'white', color: theme? 'whitesmoke' : "black"}}>
                <h3>{user?.fullname}</h3>
                <textarea name="adminMsg" cols="30" rows="7" placeholder='Start typing...' ref={textRef} style={{ color: theme? 'white' : "#333"}}></textarea>


                <input type="submit" value='Message Admin'/>
            </form>
        </div>
    </div>
  )
}
