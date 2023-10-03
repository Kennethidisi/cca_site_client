import React, { useEffect, useState } from 'react'
import "./courses.css"
import Header from '../../components/header/Header'
import CourseCard from '../../components/courseCard/CourseCard'
import Footer from '../../components/footer/Footer'
import axios from "axios"

export default function Courses() {
  const[courses, setCourses] = useState([])
  const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false)
  
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        setLoading(true)
        setError(false)
        const res = await axios.get("https://cca-server-feyn.onrender.com/api/course")
        setCourses(res.data)
        setLoading(false)
        setError(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchData()
  },[])


  return (
    <div className='courseContainer'>
      <Header/>

      <section className="courseBanner">
            <h1>Our <span>Courses</span></h1>
      </section>

      {loading? 
         <section className='course_sect'>
             <h1>Loading Courses...</h1>
         </section>

       :

       <section className='course_sect'>
        {error && <h1>Unable to load courses, please check network connection.</h1>}
        {courses.map((course)=>{
          return <CourseCard course={course} key={course._id}/>
        })}
      </section>
      }

      <Footer/>
    </div>
  )
}
