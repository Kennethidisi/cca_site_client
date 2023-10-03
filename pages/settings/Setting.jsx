import React, { useContext, useEffect, useRef, useState } from 'react'
import './setting.css'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import STUheader from '../../components/studentHeader/STUheader'
import profile from '../../images/noAvatar.png'
import { myContext } from '../../context/AppContext'
import axios from 'axios'
import FdashBoard from '../../components/dashBoardFooter/FdashBoard'

export default function Setting() {
    const[currentUser, setCurrentUser] = useState()
    const {user, dispatch, showNav, theme} = useContext(myContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleTheme = ()=>{
        dispatch({type: "THEME_CHANGE"})
      }     

    const handleLogOut = ()=>{
    localStorage.clear('user')
    dispatch({type: 'LOGOUT'})
    }


    const[file, setFile] = useState(null)
    const[image, setImage] = useState([])
    const imgRef = useRef(null);

    // input refs
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    console.log(image)

    useEffect(()=>{
        if(!file){
            return;
        }

        const newImg = []

        newImg.push(URL.createObjectURL(file))

        setImage(newImg)

        imgRef.current.src = newImg
    },[file])



    useEffect(()=>{
        if(currentUser){
            localStorage.clear('user')
            localStorage.setItem('user', JSON.stringify(currentUser))
        }  
    },[currentUser])

    const handleUpdate = async(e)=>{
        e.preventDefault()
        dispatch({type: 'UPDATE_START'})

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            confirmPasswordRef.current.style.border = "1px solid red"
            return;
        }else{
            confirmPasswordRef.current.style.border = "1px solid silver"

            const updateData = {
                fullname: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                password: confirmPasswordRef.current.value
            }
    
    
            if(file){
                const data = new FormData();
                const fileName = file.name
                data.append("file", file)
                data.append("name", fileName)
                updateData.profileImg = fileName;
    
                try {
                    await axios.post("https://cca-server-feyn.onrender.com/api/upload", data)
                } catch (error) {
                    console.log(error)
                }
            }
    
    
            try {
                const res =  await axios.put("https://cca-server-feyn.onrender.com/api/cca/"+ user._id, updateData)
                localStorage.clear('user')
                dispatch({type: "UPDATE_SUCESS", payload: res.data})
                setCurrentUser(res.data)
            } catch (error) {
                console.log(error)
            }

        }

    }

    return (
      <div className={showNav? 'settingContainer container_help' : 'settingContainer'} style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
          <LeftSideBar/>
  
          <div className='right_setting_container'  style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
              <STUheader/>
              <div className="setting_general">
                <h1>Settings</h1>
                <small className='setting_underline'></small>
              </div>

              <div className="general_settings_div"  style={{backgroundColor: theme? '#444' : 'whitesmoke', color: theme? 'white' : "black"}}>
                <div className="gen_sett_title">
                    <h4 style={{ color: theme? 'white' : "black"}}>General Settings</h4>
                    <p style={{ color: theme? 'white' : "#222"}}>Profile configuration settings</p>
                </div>

                <div className="general_setting" style={{backgroundColor: theme? '#222' : 'white', color: theme? 'white' : "black"}}>
                    <div className="prof_gen_sett">
                        <h5>Basic Information</h5>

                        <div className="profile_sett_div">
                            <p>Profile Pics</p>
                            <div className="profile_sett">
                                <img src={user.profileImg? PF + user.profileImg : profile} alt="profile" ref={imgRef}/>
                                <input type="file" id='file' onChange={(e)=> setFile(e.target.files[0])}/>
                                <label htmlFor="file" className='changeProBtn'>Change</label>
                            </div>
                        </div>

                        <form className='profileData' onSubmit={handleUpdate}>
                            <div className="profile_sett_div">
                                <p>Fullname</p>
                                <input type="text" ref={nameRef} required style={{backgroundColor: theme? '#333' : 'white', color: theme? 'white' : "black"}}/>
                            </div>

                            <div className="profile_sett_div">
                                <p>Phone</p>
                                <input type="text" ref={phoneRef} required style={{backgroundColor: theme? '#333' : 'white', color: theme? 'white' : "black"}}/>
                            </div>

                            <div className="profile_sett_div">
                                <p>Email</p>
                                <input type="email" ref={emailRef} required style={{backgroundColor: theme? '#333' : 'white', color: theme? 'white' : "black"}}/>
                            </div>

                            <div className="profile_sett_div">
                                <p>Password</p>
                                <input type="password" ref={passwordRef} required style={{backgroundColor: theme? '#333' : 'white', color: theme? 'white' : "black"}}/>
                            </div>

                            <div className="profile_sett_div">
                                <p>Confirm Password</p>
                                <input type="password" ref={confirmPasswordRef} required style={{backgroundColor: theme? '#333' : 'white', color: theme? 'white' : "black"}}/>
                            </div>

                            <div className="btn_save_div">
                                 {currentUser?
                                   <button id='save_change_btn' onClick={()=> alert('Update Sucessful')}>Confirm Save</button> :

                                   <button id='save_change_btn'>Continue</button>
                                 }
                            </div>
                        </form>
                    </div>
                </div>
              </div>

              <div className="display_settings">
                    <h3 className='display' style={{ color: theme? 'white' : "black"}}>Display Setting</h3>

                 <div className='theme_logout' style={{backgroundColor: theme? '#222' : 'whitesmoke', color: theme? 'white' : "black"}}>
                    <div className="theme_div">
                        <p>
                            <span className='dark_theme_title'>Dark Theme</span>
                            <small className='theme_btn' onClick={handleTheme}><span className={theme? 'toggle_theme toggle_dark_theme' : 'toggle_theme'}></span></small>
                        </p>
                    </div>

                    <div className='setting_logout'>
                        <p>
                            <span className='setting_logout_title'>Logout</span>
                            <button className="setting_logout_btn" onClick={handleLogOut}>Logout</button>
                        </p>
                    </div>
                  </div>
              </div>

              <FdashBoard/>
          </div>
      </div>
    )
}
