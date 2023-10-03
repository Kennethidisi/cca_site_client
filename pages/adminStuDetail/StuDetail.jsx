import React, { useEffect, useState } from 'react'
import './stuDetail.css'
import AdminLeftBar from '../../components/adminLeftBar/AdminLeftBar'
import STUheader from '../../components/studentHeader/STUheader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import noPics from '../../images/noAvatar.png'
import { Cancel } from '@mui/icons-material'

export default function StuDetail() {
    const stuId = useParams().id
    const[data, setData] = useState([])
    const[student, setStudent] = useState({})
    const[showDelete, setShowDelete] = useState(false)
    const[deleted, setdeleted] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate = useNavigate();

    const fetchStudents = async()=>{
      try {
          const res = await axios.get('https://cca-server-feyn.onrender.com/api/cca')
          setData(res.data)

      } catch (error) {
          console.log(error)
      }
    }

    useEffect(()=>{

        fetchStudents();
        
        const individualStudent = data.find((student)=>{
            return student._id === stuId
        })
        setStudent(individualStudent)
        
    }, [data, stuId])

    const handleClose = ()=>{
      setShowDelete(false)
      setdeleted(false)
      navigate('/admin/stu')
    }

    const handledelete = ()=>{
        setShowDelete(true)
    
    }

    const handleConfirmDelete = async()=>{
        try {
            await axios.delete('https://cca-server-feyn.onrender.com/api/cca/'+ student?._id)
            .then(()=>{
                setdeleted(true)
            })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='stuDetail_container'>
        <AdminLeftBar/>

        <div className="stuDetail_right">
            <STUheader show={true}/>

            <div className='stuDetail_div'>
              <button className='cancel_btn' onClick={()=> navigate('/admin/stu')}><Cancel className='cancel'/></button>
              <h3 className='stuDetail_title'>Student Detail</h3>

              <div className='stuDetail_info'>
                <img src={student?.profileImg? PF + student.profileImg : noPics} alt="profilePic" className="profile_pic" crossOrigin='anonymous'/>
                <h5>Fullname: <p>{student?.fullname}</p></h5>
                <h5>Course: <p>{student?.course}</p></h5>
                <h5>Email: <p>{student?.email}</p></h5>
                <h5>Phone: <p>{student?.phone}</p></h5>
                <h5>Status: <p className='active_detail'>Active</p></h5>
              </div>

              <div className="stu_btn_div">
                <Link to={`/admin/updateStu/${student?._id}`}><button className='update'>Update</button></Link>
                <button className="delete" onClick={handledelete}>Delete</button>
              </div>


              {showDelete && 
                <div className='delete_modal_div'>
                    <small className="close" onClick={handleClose}><Cancel className='close_btn'/></small>
                    
                    {deleted? <h3>Student Deleted Successfully</h3>

                    :

                    <div className="delete_modal">
                        <p>Are you sure you want to delete Student?</p>
                        <span className='delete_btn_span'>
                            <button className="delete_yes" onClick={handleConfirmDelete}>CONFIRM</button>
                            <button className="delete_No" onClick={()=> setShowDelete(false)}>CANCEL</button>
                        </span>
                    </div>
                    }
                </div>}
            </div>

        </div>

    </div>
  )
}
