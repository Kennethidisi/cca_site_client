import React, { useContext } from 'react'
import "./adminLeftBar.css"
import { Link } from 'react-router-dom'
import home from "../../images/home.png"
import student from "../../images/adminStudent.png"
import course from "../../images/adminCourse.png"
import message from "../../images/adminMessage.png"
import { myContext } from '../../context/AppContext'

export default function AdminLeftBar() {

    const{showNav, dispatch} = useContext(myContext)

    const handleClick = ()=>{
        dispatch({type: "SHOW_MENU"})
      } 
  return (
    <div className={showNav? 'admin_leftBar' : 'admin_leftBar hide_bar'}>
        <div className="admin_leftbar_wrapper">
            <h3>Admin</h3>

            <ul>
                <Link to="/admin" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={home} alt="icon" />
                        <span>Dashboard</span>
                    </li>
                </Link>

                <Link to="/admin/stu" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={student} alt="icon" />
                        <span>Students</span>
                    </li>
                </Link>

                <Link to="/admin/course" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={course} alt="icon" />
                        <span>Register Student</span>
                    </li>
                </Link>

                <Link to="/admin/message" style={{textDecoration: 'none'}} onClick={handleClick}>
                    <li>
                        <img src={message} alt="icon" />  
                        <span>Messages</span>
                    </li>
                </Link>

            </ul>
        </div>
    </div>
  )
}
