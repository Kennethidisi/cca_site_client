import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/header/Header'
import { Link, useParams } from 'react-router-dom'
import './courseDetail.css'
import axios from 'axios'
import Footer from '../../components/footer/Footer'

export default function CourseDetail() {
    const id = useParams().id
    const[course, setCourse] = useState()
    const[error, setError] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const scrollRef = useRef(null)
    
    useEffect(()=>{
        const fetchCourse = async()=>{
            try {
                const res = await axios.get('https://cca-server-feyn.onrender.com/api/course/' + id)
                setCourse(res.data)
            } catch (error) {
                setError(true)
            }
        }

        fetchCourse()
        
    },[id])

    
  return (
    <div className='courseDetail_container' ref={scrollRef}>
        <Header/>

        <section className="courseDetailBanner">
            <h1>{course?.name}</h1>
      </section>

      {error? 
          <div className="error">
            <h4>An error occured, please kindly check network connection and reload page.</h4>
          </div>
          
          :

          <section className='detail_section'>
          <div className='course_datail_img'>
              <img src={PF+ `assets/${course?.courseImg}`} alt="courseImage" />
          </div>
  
          <div className='course_detail_info'>
              <h1>{course?.name}</h1>
              <h3>{course?.infoText}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt sint autem porro hic, unde dolorum voluptas odit iste, ipsum id corporis minus eveniet culpa, ex deleniti fugit distinctio voluptate cupiditate quibusdam facilis! Labore reprehenderit voluptatibus, facilis est odio nesciunt!</p>
              <h2>Duration: <span>{course?.duration}</span></h2>
              <h2>Price: <span>₦{course?.price}</span></h2>
              <Link to='/register'><button className="get_started">Get Started</button></Link>
              <Link to='/course' className='back'>Back to courses</Link>
          </div>
        </section>
      }

      <Footer/>
    </div>
  )
}
