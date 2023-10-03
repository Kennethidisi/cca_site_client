import React, { useContext, useEffect, useState } from 'react'
import "./UpdateStuAdmin.css"
import "../../pages/adminStudent/adminStu.css"
import AdminLeftBar from '../adminLeftBar/AdminLeftBar'
import STUheader from '../studentHeader/STUheader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { myContext } from '../../context/AppContext'



export default function UpdateStuAdmin() {
    const stuId = useParams().id
    const[data, setData] = useState([])
    const[student, setStudent] = useState({})
    const[isUpdating, setIsUpdating] = useState(false)
    const{showNav} = useContext(myContext)

    const navigate = useNavigate()

    const[formData, setFormData] = useState({
        fullname: student?.fullname,
        course: student?.course,
        phone: student?.phone,
        email: student?.email,
        session: student?.session
    })

    const handleChange = (e)=>{
        const{name, value} = e.target

        setFormData((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsUpdating(true)
        await axios.put("https://cca-server-feyn.onrender.com/api/cca/" + stuId, {
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
            session: formData.session
        }).then(()=>{
            setIsUpdating(false)
            navigate('/admin/stu')
        }).catch((err)=>{
            navigate('/500')
            setIsUpdating(false)
        })
    }
    

    useEffect(()=>{

        const fetchStudents = async()=>{
            try {
                const res = await axios.get('https://cca-server-feyn.onrender.com/api/cca')
                setData(res.data)
    
            } catch (error) {
                navigate('/500')
            }
        }

        fetchStudents();
        
        const individualStudent = data.find((student)=>{
            return student._id === stuId
        })
        setStudent(individualStudent)
    }, [data, stuId])



  return (
    <div className={showNav? 'adminStu_container admin_help' : 'adminStu_container'}>
        <AdminLeftBar/>

        <div className="admin_stu_right">
            <STUheader/>

            <h2>Codeprof Academy Students</h2>

            <div className='admin_stu_update'>
                <h3>Student Update</h3>
                <form className='admin_update_form'>

                    <div className="input_grp">
                        <label>Name:</label>
                        <input type="text" name='fullname' placeholder={student?.fullname} onChange={handleChange} />
                    </div>

                    <div className="input_grp">
                        <label>Email:</label>
                        <input type="email" name='email' placeholder={student?.email} onChange={handleChange} />
                    </div>

                    <div className="input_grp">
                        <label>Phone No:</label>
                        <input type="number" name='phone' placeholder={student?.phone} onChange={handleChange} />
                    </div>

                    <div className="input_grp">
                        <label>Courses:</label>
                        <select name="course" onChange={handleChange} >
                            <option value={student?.course}>{student?.course}</option>
                            <option value="java">Java Language</option>
                            <option value="python_dev">Python Development</option>
                            <option value="full_stack">Full Stack</option>
                            <option value="digital_marketing">Digital Marketing</option>
                            <option value="robotics">Robotics</option>
                            <option value="graphics_design">Graphics Design</option>
                        </select>
                    </div>

                    <div className="session_grp">
                        <legend>Session:</legend>
                        <div className='stu_session'>
                            <span className='radio_input'>
                                Morning
                                <input type="radio" name='session' value="morning" onChange={handleChange} checked={formData.session === 'morning'}/>
                            </span>
                            <span className='radio_input'>
                                Afternoon
                                <input type="radio" name='session' value="afternoon" onChange={handleChange} checked={formData.session === 'afternoon'}/>
                            </span>
                            <span className='radio_input'>
                                Evening
                                <input type="radio" name='session' value="evening" onChange={handleChange} checked={formData.session === 'evening'}/>
                            </span>
                        </div>
                    </div>

                     <input type="submit" value={isUpdating? 'Saving...' : 'Save Changes'} className='adminUpdateBtn' onClick={handleSubmit}/>
                </form>
            </div>
        </div>

    </div>
  )
}
