import React, { useContext, useRef, useState } from 'react'
import './adminCourse.css'
import AdminLeftBar from '../../components/adminLeftBar/AdminLeftBar'
import STUheader from '../../components/studentHeader/STUheader'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import FdashBoard from '../../components/dashBoardFooter/FdashBoard'
import { myContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'


export default function AdminCourse() {
    const{showNav} = useContext(myContext)
    const[isRegistering, setIsRegistering] = useState(false)
    const[error, setError] = useState(false)
    

    // student input ref
    const studentName = useRef(null);
    const studentEmail = useRef(null);
    const studentPhone = useRef(null);
    const studentCourse = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const [session, setSession] = useState({
        studentSession: ""
    })

    const handleChange = (e)=>{
        setSession((prev)=>{
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsRegistering(true)
        setError(false)

        if(password.current.value !== confirmPassword.current.value){
            confirmPassword.current.style.border = "1px solid red"
            setIsRegistering(false)
            return;
        }else{
            confirmPassword.current.style.border = "1px solid silver"
            await axios.post("https://cca-server-feyn.onrender.com/api/auth/register", {
            fullname: studentName.current.value,
            email: studentEmail.current.value,
            phone: studentPhone.current.value,
            course: studentCourse.current.value,
            session: session.studentSession,
            password: password.current.value,
            }).then(()=>{
                setIsRegistering(false)
                setError(false)
                alert("Students sucessfully registered")
                studentCourse.current.value = ""
                studentName.current.value = ""
                studentPhone.current.value = ""
                studentEmail.current.value = ""
                setSession({studentSession: ""})
            }).catch((err)=>{
                setError(true)
                setIsRegistering(false)
            })
        }
        
    }


    if(error){
        return(
            <div className='error_div'>
                <h1>An error occured while registering <br /> Kindly check network connection and try again</h1>
                <Link to='/admin'>Go back</Link>
            </div>
        )
    }


  return (
    <div className={showNav? 'adminCourse_container admin_help' : 'adminCourse_container'}>
        <AdminLeftBar/>

        <div className="admin_course_right">
            <STUheader show={true}/>

            <h2>Register Student</h2>

            <div className='admin_course_div'>
            <form onSubmit={handleSubmit} className='adminregisterstu'>
                            <div className="input_grp">
                                <label>Fullname:</label>
                                <input type="text" ref={studentName} required/>
                            </div>
        
                            <div className="input_grp">
                                <label>Phone No:</label>
                                <input type="number" ref={studentPhone} required/>
                            </div>
        
                            <div className="input_grp">
                                <label>Email:</label>
                                <input type="email" ref={studentEmail} required/>
                            </div>
        
                            <div className="input_grp">
                                <label>Courses:</label>
                                <select ref={studentCourse} required>
                                    <option value="">. . .</option>
                                    <option value="java">Java Language</option>
                                    <option value="python_dev">Python Development</option>
                                    <option value="full_stack">Full Stack</option>
                                    <option value="digital_marketing">Digital Marketing</option>
                                    <option value="robotics">Robotics</option>
                                    <option value="graphics_design">Graphics Design</option>
                                </select>
                            </div>
        
                            <div className="input_grp">
                                <legend>Session:</legend>
                                <div className='session'>
                                    <span className='radio'>
                                        Morning
                                        <input type="radio" name='studentSession' value="morning" checked={session.studentSession === "morning"} onChange={handleChange}/>
                                    </span>
                                    <span className='radio'>
                                        Afternoon
                                        <input type="radio" name='studentSession' value="afternoon" checked={session.studentSession === "afternoon"} onChange={handleChange} />
                                    </span>
                                    <span className='radio'>
                                        Evening
                                        <input type="radio" name='studentSession' value="evening" checked={session.studentSession === "evening"} onChange={handleChange}/>
                                    </span>
                                </div>
                            </div>

                            <div className="input_grp">
                                <label>Password:</label>
                                <input type="password" ref={password} required/>
                            </div>

                            <div className="input_grp">
                                <label>Confirm Password:</label>
                                <input type="password" ref={confirmPassword} required/>
                            </div>
        
                            <button type="submit" >{isRegistering? <CircularProgress className='circular'/> : "Register"}</button>
              </form>
            </div>

            <FdashBoard/>
        </div>
    </div>
  )
}
