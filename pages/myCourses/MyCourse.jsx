import React, { useContext } from 'react'
import "./myCourse.css"
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import STUheader from '../../components/studentHeader/STUheader'

import testing from '../../images/java.png'
import { myContext } from '../../context/AppContext'

export default function MyCourse() {

  const{showNav, theme} = useContext(myContext)

  return (
    <div className={showNav? 'my_courses_container container_help' : 'my_courses_container'} style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
        <LeftSideBar/>

        <div className="course_right" style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'whitesmoke' : "black"}}>
            <STUheader/>

            <div className='course_reg_title'>
                <h3>Course Registered</h3>
                <small className='course_reg_title_underline'></small>
            </div>

            <div className='myCourseCard_div' >
                <div className="myCourseCard" style={{backgroundColor: theme? '#222' : 'white', color: theme? 'whitesmoke' : "black"}}>
                  <img src={testing} alt="" />
                  <div className='my_course_details'>
                    <h4 style={{color: theme? 'whitesmoke' : "black"}}>Course Title: <span>JavaScript</span></h4>
                    <h4 style={{color: theme? 'whitesmoke' : "black"}}>Course Duration: <span>3 months</span></h4>
                    <button>Get materials</button>
                  </div>
                </div>
            </div>

            {/* <p className='register_course'>Register more courses?</p> */}
        </div>
    </div>
  )
}
