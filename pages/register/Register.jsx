import React, { useRef, useState } from 'react'
import "./register.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const[adminRegister, setAdminRegister] = useState(false)

    const[isRegistering, setIsRegistering] = useState(false)
    const navigate = useNavigate()
    
    // admin input refs
    const adminName = useRef(null);
    const adminEmail = useRef(null);
    const adminPhone = useRef(null);
    const adminPassword = useRef(null);
    const secret_key = useRef(null);

    // student input ref
    const studentName = useRef(null);
    const studentEmail = useRef(null);
    const studentPhone = useRef(null);
    const studentCourse = useRef(null);
    const studentPassword = useRef(null);
    const studentPassword2 = useRef(null);


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

        
        if(studentPassword.current.value !== studentPassword2.current.value){
            studentPassword2.current.style.border = "1px solid red"
            setIsRegistering(false)
            return;
        }else{
            studentPassword2.current.style.border = "1px solid silver"
            await axios.post("https://cca-server-feyn.onrender.com/api/auth/register", {
            fullname: studentName.current.value,
            email: studentEmail.current.value,
            phone: studentPhone.current.value,
            course: studentCourse.current.value,
            session: session.studentSession,
            password: studentPassword.current.value
            }).then(()=>{
                setIsRegistering(false)
                navigate('/login')
                studentCourse.current.value = ""
                studentName.current.value = ""
                studentPhone.current.value = ""
                studentEmail.current.value = ""
                setSession({studentSession: ""})
            }).catch((err)=>{
                navigate('/500')
                setIsRegistering(false)
            })
        }

    }


    const handleAdminSubmit = async(e)=>{
        e.preventDefault();
        setIsRegistering(true)
        await axios.post("https://cca-server-feyn.onrender.com/api/auth/admin/register", {
            name: adminName.current.value,
            email_address: adminEmail.current.value,
            phone_no: adminPhone.current.value,
            secret_key: secret_key.current.value,
            password: adminPassword.current.value
        }).then(()=>{
            setIsRegistering(false)
            navigate('/login')
            adminEmail.current.value = ""
            adminName.current.value = ""
            adminPhone.current.value = ""
            secret_key.current.value = ""
            adminPassword.current.value = ""
        }).catch((err)=>{
            navigate('/500')
            setIsRegistering(false)
        })
    }


  return (
    <div className='registerContainer'>
      <Header/>

      <section className="regBanner">
            <h1>Join us <span>today!</span></h1>
      </section>

        <section className="form_sect">
            <div className="form_container">
                <h1>Registration Form</h1>
                <p>Kindly fill your details to get started</p>

                {adminRegister? 
                        <form onSubmit={handleAdminSubmit} >
                            <div className="input_grp">
                                <label>Fullname:</label>
                                <input type="text" ref={adminName} required/>
                            </div>
        
                            <div className="input_grp">
                                <label>Phone No:</label>
                                <input type="number" ref={adminPhone} required/>
                            </div>
        
                            <div className="input_grp">
                                <label>Email:</label>
                                <input type="email"ref={adminEmail} required/>
                            </div>

                            <div className="input_grp">
                                <label>Password:</label>
                                <input type="password" ref={adminPassword} required/>
                            </div>

                            <div className="input_grp">
                                <label>Secret Key to Register as Admin:</label>
                                <input type="password" ref={secret_key} required/>
                            </div>
                        
        
                            <button type="submit">{isRegistering? <CircularProgress className='circular'/> : "Register"}</button>
        
                            <p className='adminRegisterLink' onClick={()=> setAdminRegister(false)}>Click here to register as Student</p>
                        </form>

                            :
  
                        <form onSubmit={handleSubmit}>
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
                                <input type="password" ref={studentPassword} required/>
                            </div>

                            <div className="input_grp">
                                <label>Confirm Password:</label>
                                <input type="password" ref={studentPassword2} required/>
                            </div>
        
                            <button type="submit" >{isRegistering? <CircularProgress className='circular'/> : "Register"}</button>
        
                            <p className='adminRegisterLink' onClick={()=> setAdminRegister(true)}>Click here to register as Admin</p>
                        </form>
                }
            </div>
        </section>

        <Footer/>
    </div>
  )
}
