import React from 'react'
import "./courseCard.css"
// import bg from "../../images/bg.jpg"
import { Link } from 'react-router-dom'

export default function CourseCard({course}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='course_card'>
        <img src={PF+ `assets/${course.courseImg}`} alt="courseImage" width="250px"/>
        <div className='course'>
          <h3>{course.name}</h3>
          <p className='course_info'>
            {course.infoText}
          </p>
          <Link to={`/course/${course._id}`}><button className="enroll">Learn More</button></Link>
        </div>
    </div>
  )
}
