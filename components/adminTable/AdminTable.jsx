import React, { useEffect, useState } from 'react'
import "./adminTable.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Cancel } from '@mui/icons-material'

export default function AdminTable() {
    const[data, setData] = useState([])
    const [showDelete, setShowDelete] = useState(false)
    const[deleted, setdeleted] = useState(false)
    const [clickedStu, setClickedStu] = useState()

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
    }, [deleted])

    const handledelete = (id)=>{
        setShowDelete(true)
        setClickedStu(id)
    }

    const handleConfirmDelete = async()=>{
        try {
            await axios.delete('https://cca-server-feyn.onrender.com/api/cca/'+ clickedStu)
            .then(()=>{
                setdeleted(true)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = ()=>{
        setShowDelete(false)
        setdeleted(false)
    }

  return (
    <div className='adminTableStu'>
        {data[0]?
          <table className='adminTable2'>
          <tbody>
          <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th className='status'>Status</th>
          </tr>

          {
              data.map((student)=>{
                  return (
                      <tr key={student._id}>
                          <td><Link to={`/admin/stuDetail/${student._id}`} style={{textDecoration: 'none'}}>{student.fullname}</Link></td>
                          <td className='course_table'>{student.course}</td>
                          <td className='active'>Active</td>
                          <td className='update'><Link to={`/admin/updateStu/${student._id}`}><button className='updateBtn'>Update</button></Link></td>
                          <td className='delete'><button className='deleteBtn' onClick={()=>handledelete(student._id)}>Delete</button></td>
                      </tr>
                  )
              })
          }
          </tbody>
      </table>

      :

      <h1 className='no_stu'>Loading...</h1>
        }

        {showDelete && 
        <div className='delete_modal_container'>
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
  )
}
