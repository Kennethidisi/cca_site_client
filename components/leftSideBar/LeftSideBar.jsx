import React, { useContext } from 'react'
import "./leftSideBar.css"

// icons
import profile from "../../images/profile.png"
import course from "../../images/course.png"
import payment from "../../images/payment.png"
import msgAdmin from "../../images/message.png"
// import account from "../../images/account.png"
import groupChat from "../../images/groupChat.png"
import setting from "../../images/setting.png"
import { Link } from 'react-router-dom'
import { myContext } from '../../context/AppContext'


export default function LeftSideBar() {
    const{showNav, dispatch} = useContext(myContext)

    const handleClick = ()=>{
        dispatch({type: "SHOW_MENU"})
      } 

  return (
    <div className={showNav? 'l_side_bar' : 'l_side_bar hide_bar'}>
        <div className="l_side_bar_wrapper">
            <h3>Dash Board</h3>

            <ul>
                <Link to="/student" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={profile} alt="icon" />
                        <span>My Profile</span>
                    </li>
                </Link>

                <Link to="/student/course" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={course} alt="icon" />
                        <span>My Courses</span>
                    </li>
                </Link>

                <Link to="/student/payment" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={payment} alt="icon" />
                        <span>Payment Status</span>
                    </li>
                </Link>

                <Link to='/msgAdmin' style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={msgAdmin} alt="icon" />  
                        <span>Message Admin</span>
                    </li>
                </Link>

                {/* <Link style={{textDecoration: 'none'}}>
                    <li>
                        <img src={account} alt="icon" />  
                        <span>Accounts</span>
                    </li>
                </Link> */}

                <Link to="/student/chatRoom" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={groupChat} alt="icon" />   
                        <span>ChatRoom</span>
                    </li>
                </Link>

                <Link to="/student/setting" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={setting} alt="icon" />   
                        <span>Settings</span>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
