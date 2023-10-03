import React, { useContext } from 'react'
import './error404.css'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/AppContext';

export default function Page404() {
  const{dispatch} = useContext(myContext);
  const handleClick = ()=>{
    dispatch({type: "CLEAN_ERROR"})
  }
  return (
    <section className='error404' style={{backgroundColor: "#B66DFF"}}>
      <div className='div_404'>
          <h1>404</h1>
          <span>
            <h3>SORRY!</h3>
            <p>The page you’re looking for was not found!</p>
          </span>
      </div>
      <Link to='/login' onClick={handleClick} className='error_link'>Back to Login</Link>
    </section>
  )
}
