import React, { useContext } from 'react'
import './adminStudentTable.css'
import { myContext } from '../../context/AppContext'

export default function AdminStuTable() {
    const{ theme} = useContext(myContext)
  return (
    <div className='admin_table_container' style={{backgroundColor: theme? '#222' : 'white', color: theme? 'whitesmoke' : "black"}}>

        <h3>Codeprof Academy Students</h3>

        <table className='adminTable'>
            <tbody>
            <tr style={{color: theme? 'whitesmoke' : "black"}} className={theme? 'row' : 'tr'}>
                <th>Student Name</th>
                <th>Course</th>
                <th>Status</th>
            </tr>

            <tr className={theme? 'row' : 'tr'}>
                <td>Kenneth Idisi</td>
                <td>Javascript Language</td>
                <td className='status_active'>Active</td>
            </tr>

            <tr className={theme? 'row' : 'tr'}>
                <td>Owuye Malik</td>
                <td>Full stack</td>
                <td className='status_active'>Active</td>
            </tr>

            <tr className={theme? 'row' : 'tr'}>
                <td>Okolo-obi Victor</td>
                <td>Data Science</td>
                <td className='status_active'>Active</td>
            </tr>

            <tr className={theme? 'row' : 'tr'}>
                <td>Efe Best</td>
                <td>Robotics</td>
                <td className='status_active'>Active</td>
            </tr>

            <tr className={theme? 'row' : 'tr'}>
                <td>Obein Jessey</td>
                <td>Python Language</td>
                <td className='status_active'>Active</td>
            </tr>

            <tr className={theme? 'row' : 'tr'}>
                <td>Ezedi Anita</td>
                <td>Frontend</td>
                <td className='status_active'>Active</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

