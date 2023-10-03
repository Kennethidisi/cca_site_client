import React, { useContext, useState } from 'react'
import noAvatar from "../../images/noAvatar.png";
import { myContext } from '../../context/AppContext';
import logo from "../../images/logo.png"
import menu from "../../images/blackmenu.png"
import menuwhite from "../../images/menu_white.png"
import "./stuheader.css"
import {KeyboardArrowDown, KeyboardArrowUp, Logout, Notifications} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function STUheader({show}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user, dispatch, theme} = useContext(myContext)
  const[showNotification, setShowNotification] = useState(false)

  const handleLogOut = ()=>{
    localStorage.clear('user')
    dispatch({type: 'LOGOUT'})
  }

  const handleClick = ()=>{
    dispatch({type: "SHOW_MENU"})
  } 


  return (
    <header className='s_header' style={{backgroundColor: theme? '#111' : 'white', color: theme? 'white' : "black"}}>

        <img src={theme? menuwhite : menu} alt="menu" className='stuMenuBtn' onClick={handleClick}/>
        
        <img src={logo} alt="logo" className='s_header_img'/>
        

        <div className='top_profile'>
            
            <img src={user.profileImg? PF + user.profileImg : noAvatar} alt="profile" className='topImg' crossOrigin='anonymous'/>
            <p>{user?.fullname || user?.name}</p>

            <small onClick={()=> setShowNotification(!showNotification)}>{
              showNotification? <KeyboardArrowUp className='arrowDown' style={{color: theme? 'white' : '#222'}}/> : <KeyboardArrowDown className='arrowDown' style={{color: theme? 'white' : '#222'}}/>
            }</small>

            <div className={showNotification? 'notification' : 'hide_notification'} style={{backgroundColor: theme? '#111': 'white'}}>

              {show && <Link to="/admin/message" className='notification_link' style={{color: theme? 'white' : '#23267B'}}><span className='notification_span'><Notifications className='notificationIcon'/><small>5</small></span> Notification</Link>}

              <Link to="/login" className='notification_link' onClick={handleLogOut} style={{color: theme? 'red' : '#23267B'}}>
                  <Logout className='logoutIcon' style={{color: theme? 'red' : '#23267B'}}/> Logout 
              </Link>
            </div>
        </div>

    </header>
  )
}
