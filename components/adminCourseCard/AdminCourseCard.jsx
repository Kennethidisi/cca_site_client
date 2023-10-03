import React from 'react'
import "./adminCourseCard.css"

export default function AdminCourseCard({course}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='admincourse_card'>
        <img src={PF+ `assets/${course.courseImg}`} alt="courseImage" width="250px"/>
        <div className='admincourse'>
          <h3>{course.name}</h3>
        </div>
    </div>
  )
}
