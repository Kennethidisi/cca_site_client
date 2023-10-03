import React, { useContext, useEffect, useRef, useState } from 'react'
import "./login.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { myContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'


export default function Login() {
  const[adminLogin, setAdminLogin] = useState(false)

  const{ loading, error, dispatch} = useContext(myContext);

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const adminPasswordRef = useRef(null)
  const adminEmailRef = useRef(null)
  const adminSecretKey = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    dispatch({type: "LOGIN_START"})

    try {
        const res = await axios.post("https://cca-server-feyn.onrender.com/api/auth/login", {email: emailRef.current.value, password: passwordRef.current.value});
        dispatch({type: "LOGIN_SUCESS", payload: res.data})
        navigate('/student')
    } catch (error) {
        dispatch({type: "LOGIN_ERROR", payload: error})
        if(error?.response?.status === 404){
          navigate('/404')
        }
      
        if(error?.response?.status === 500){
          navigate('/500')
        }    
        
        if(error?.response?.status === 400){
          passwordRef.current.style.border = "1px solid red"
        }else{
          passwordRef.current.style.border = "1px solid silver"
        }
    }

  }

  const handleAdminSubmit = async(e)=>{
    e.preventDefault()

    dispatch({type: "LOGIN_START"})

    try {
        const res = await axios.post("https://cca-server-feyn.onrender.com/api/auth/admin/login", {email_address: adminEmailRef.current.value, password: adminPasswordRef.current.value, secret_key: adminSecretKey.current.value});

        dispatch({type: "LOGIN_SUCESS", payload: res.data})
        navigate('/admin')
    } catch (error) {
        dispatch({type: "LOGIN_ERROR", payload: error})

        if(error?.response?.status === 404){
          navigate('/404')
        }
      
        if(error?.response?.status === 500){
          navigate('/500')
        }   
        
        if(error?.response?.status === 400){
          adminPasswordRef.current.style.border = "1px solid red"
        }else{
          adminPasswordRef.current.style.border = "1px solid silver"
        }

        if(error?.response?.status === 403){
          adminSecretKey.current.style.border = "1px solid red"
        }else{
          adminSecretKey.current.style.border = "1px solid silver"
        }
    }
  }


  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        dispatch({type: "CLEAN_ERROR"})
      },3000)
    }
  },[error,dispatch])
  
  
  return (
    <div className='loginContainer'>
      <Header/>

      <section className="loginBanner">
            <h1>{adminLogin? 'Admin' : 'Student'} <span>Login</span></h1>
      </section>

      <section className="login_sect">
            {
              adminLogin?

              <div className="login_container">
                <h1>Admin Login</h1>
                <form onSubmit={handleAdminSubmit}>

                    <div className="input_grp">
                        <label>Email:</label>
                        <input type="email" name="email" ref={adminEmailRef} required/>
                    </div>

                    <div className="input_grp">
                        <label>Password:</label>
                        <input type="password" name="password" ref={adminPasswordRef} required/>
                    </div>

                    <div className="input_grp">
                        <label>Secret Key:</label>
                        <input type="password" name="secret" ref={adminSecretKey} required/>
                    </div>

                    {(error?.response?.status === 400) && <p className='incorrect'>Incorrect Password</p>}

                    {(error?.response?.status === 403) && <p className='incorrect'>Invalid Secretkey</p>}

                    <button type="submit">{loading? <CircularProgress className='circular'/> : "Login"}</button>

                    <p className='admin_link' onClick={()=> setAdminLogin(false)}>Click here to login as Student</p>

                </form>
            </div>

            :

            <div className="login_container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className="input_grp">
                        <label>Email:</label>
                        <input type="email" name="email" ref={emailRef} required/>
                    </div>

                    <div className="input_grp">
                        <label>Password:</label>
                        <input type="password" name="password" ref={passwordRef} required/>
                    </div>

                    {(error?.response?.status === 400) && <p className='incorrect'>Incorrect Password</p>}

                    <button type="submit">{loading? <CircularProgress className='circular'/> : "Login"}</button>


                    <p className='admin_link' onClick={()=> setAdminLogin(true)}>Click here to login as Admin</p>
                </form>
            </div>
            }
        </section>


        <Footer/>

    </div>
  )
}
