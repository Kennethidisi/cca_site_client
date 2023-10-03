import React, { useContext } from 'react'
import "./admin.css"
import AdminLeftBar from '../../components/adminLeftBar/AdminLeftBar'
import STUheader from '../../components/studentHeader/STUheader'
import {ShowChart, AutoStories, Group} from '@mui/icons-material';
import Chart from '../../components/charts/Chart';
import AdminStuTable from '../../components/tables/AdminStuTable';
import { myContext } from '../../context/AppContext';
import FdashBoard from '../../components/dashBoardFooter/FdashBoard';

export default function Admin() {
  const{showNav} = useContext(myContext)
  return (
    <div className={showNav? 'admin_container admin_help' : 'admin_container'}>
      <AdminLeftBar/>
      <div className='admin_right'>
        <STUheader show={true}/>

        <div className='adminBanner'>

          <h1 className='welcomeAdmin'>Welcome Admin</h1>

          <div className='admin_card_div'>
            <div className="adminCard">
              <h3>Students <Group/></h3>
              <h1>20</h1>
              <p>Active Students</p>
            </div>
            <div className="adminCard">
              <h3>Courses <AutoStories/></h3>
              <h1>7</h1>
              <p>Available Courses</p>
            </div>
            <div className="adminCard">
              <h3>Instructors <ShowChart/></h3>
              <h1>5</h1>
              <p>Course Instructors</p>
            </div>
          </div>
        
        </div>

        <Chart/>

        <AdminStuTable/>

        <FdashBoard/>
      </div>
    </div>
  )
}
