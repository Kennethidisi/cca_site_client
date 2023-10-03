import React, { useContext} from 'react'
import "./student.css"
import { myContext } from '../../context/AppContext'
import STUheader from '../../components/studentHeader/STUheader'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import noPics from '../../images/noAvatar.png'
import { Link } from 'react-router-dom'
import FdashBoard from '../../components/dashBoardFooter/FdashBoard'

export default function Student() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const{user, showNav, theme} = useContext(myContext)

  return (
    <div className={showNav? 'dashboardContainer container_help' : 'dashboardContainer'} style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
        <LeftSideBar/>

        <div className='right_container' style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'whitesmoke' : "black"}}>
            <STUheader/>
            <h1 className='welcome'>Welcome {user?.fullname}</h1>

            <div className='profile' style={{backgroundColor: theme? '#222' : 'white', color: theme? 'whitesmoke' : "black"}}>
                <div className='p_title'>
                    <h4>Profile</h4>
                    <small className="p_underline"></small>
                </div>

                <img src={user.profileImg? PF + user.profileImg : noPics} alt="userImg" crossOrigin='anonymous'/>

                <div className='profile_details'>
                    <h5>Fullname: <p style={{textTransform: 'uppercase', color: theme? 'whitesmoke' : "black"}}>{user?.fullname}</p></h5>

                    <h5>Email: <p style={{color: theme? 'whitesmoke' : "black"}}>{user?.email}</p></h5>

                    <h5>Phone: <p style={{color: theme? 'whitesmoke' : "black"}}>{user?.phone}</p></h5>

                    <h5>Course Registered: <p style={{textTransform: 'uppercase', color: theme? 'whitesmoke' : "black"}}>{user?.course}</p></h5>

                    <h5>Status: <p style={{textTransform: 'uppercase', color: 'green'}}>Active</p></h5>
                </div>

                <div className='btn_div'><Link to="/student/setting"><button>Update Profile</button></Link></div>
            </div>

            <FdashBoard/>
            
        </div>
    </div>
  )
}
