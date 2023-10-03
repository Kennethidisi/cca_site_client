import React, { useContext, useEffect, useRef, useState } from 'react'
import './adminStu.css'
import AdminLeftBar from '../../components/adminLeftBar/AdminLeftBar'
import STUheader from '../../components/studentHeader/STUheader'
import AdminTable from '../../components/adminTable/AdminTable'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import { Cancel } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/AppContext'

export default function AdminStu() {
  const[data, setData] = useState([])
  const searchInput = useRef(null)
  const[student, setStudent] = useState(null)
  const[noStu, setNoStu] = useState(false)
  const{showNav} = useContext(myContext)

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
      
      if(student === undefined){
        setNoStu(true)
      }
  }, [student])

  const handleSearch = ()=>{
    if(searchInput.current.value === ""){
      return;
    }

      const individualStudent = data.find((student)=>{
        return student.fullname === searchInput.current.value
      })
      setStudent(individualStudent)
      
      if(student === undefined){
        setNoStu(true)
      }
  }
  

  return (
    <div className={showNav? 'adminStu_container admin_help' : 'adminStu_container'}>
        <AdminLeftBar/>

        <div className="admin_stu_right">
            <STUheader show={true}/>

            <h2>Codeprof Academy Students</h2>


            <div className='search_div'>
              <input type="text" placeholder='Search students...' ref={searchInput}/>
              <button onClick={handleSearch}><SearchIcon className='searchIcon'/></button>
            </div>

            {student && <div className='details'>
              <button className='cancel_btn' onClick={()=> setStudent(null)}><Cancel className='cancel'/></button>
                 <h5>{student?.fullname}</h5>
                 <Link to={`/admin/stuDetail/${student._id}`}>View Details</Link>
            </div>}

            {noStu && <div className='details'>
              <button className='cancel_btn' onClick={()=> setNoStu(false)}><Cancel className='cancel'/></button>
                 <h5>No Student Found</h5>
            </div>}

            <AdminTable/>
        </div>

    </div>
  )
}
