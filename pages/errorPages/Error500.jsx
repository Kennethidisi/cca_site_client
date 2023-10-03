import React, { useContext } from 'react'
import './error404.css'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/AppContext';

export default function Error500() {
  const{dispatch} = useContext(myContext);
  const handleClick = ()=>{
    dispatch({type: "CLEAN_ERROR"})
  }
  return (
    <section className='error404'>
    <div className='div_404'>
        <h1>500</h1>
        <span>
          <h3>SORRY!</h3>
          <p>Internal server error!</p>
        </span>
    </div>
    <Link to='/login' onClick={handleClick} className='error_link'>Back to Home</Link>
  </section>
  )
}
