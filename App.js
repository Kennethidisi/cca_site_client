import React, { useContext } from 'react'
import "./style.css"
import {Routes, BrowserRouter, Route} from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/aboutUs/About'
import Courses from './pages/courses/Courses'
import Contact from './pages/contactUs/Contact'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Student from './pages/studentDasboard/Student'
import { myContext } from './context/AppContext'
import MyCourse from './pages/myCourses/MyCourse'
import MsgAdmin from './pages/messageAdmin/MsgAdmin'
import Admin from './pages/adminPage/Admin'
import Error500 from './pages/errorPages/Error500'
import Page404 from './pages/errorPages/Page404'
import AdminStu from './pages/adminStudent/AdminStu'
import AdminCourse from './pages/adminCourse/AdminCourse'
import AdminMessage from './pages/adminMessage/AdminMessage'
import UpdateStuAdmin from './components/adminUpdateStu/UpdateStuAdmin'
import Setting from './pages/settings/Setting'
import PaymentStatus from './pages/paymentStatus/PaymentStatus'
import ChatRoom from './pages/chatRoom/ChatRoom'
import StuDetail from './pages/adminStuDetail/StuDetail'
import CourseDetail from './pages/courseDetails/CourseDetail'



export default function App() {
  const {user} = useContext(myContext)
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={user?.isAdmin === true? <Admin/> : user?.isAdmin === false? <Student/> : <Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/course' element={<Courses/>}/>
           <Route path='/course/:id' element={<CourseDetail/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/student' element={user? <Student/> : <Login/>}/>
           <Route path='/student/course' element={user? <MyCourse/> : <Login/>}/>
           <Route path='/student/payment' element={user? <PaymentStatus/> : <Login/>}/>
           <Route path='/student/chatRoom' element={user? <ChatRoom/> : <Login/>}/>
           <Route path='/student/setting' element={user? <Setting/> : <Login/>}/>
           <Route path='/msgAdmin' element={user? <MsgAdmin/> : <Login/>}/>
           <Route path='/admin' element={user? <Admin/> : <Login/>}/>
           <Route path='/admin/stu' element={user? <AdminStu/> : <Login/>}/>
           <Route path='/admin/updateStu/:id' element={user? <UpdateStuAdmin/> : <Login/>}/>
           <Route path='/admin/stuDetail/:id' element={user? <StuDetail/> : <Login/>}/>
           <Route path='/admin/course' element={user? <AdminCourse/> : <Login/>}/>
           <Route path='/admin/message' element={user? <AdminMessage/> : <Login/>}/>

           <Route path='/500' element={<Error500/>}/>
           <Route path='/404' element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
  )
}
