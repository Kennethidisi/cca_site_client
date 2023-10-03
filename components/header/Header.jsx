import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import logo from "../../images/logo.png"
import menu from "../../images/menu.png"
import { myContext } from '../../context/AppContext'

export default function Header() {

  const {dispatch,showNav} = useContext(myContext)

  const handleClick = ()=>{
    dispatch({type: "SHOW_MENU"})
  } 

  const activeLink = ({isActive})=>{
    return {
      borderBottom: isActive? "2px solid #FFA500" : "2px solid transparent"
    }
  }

  return (
    <header className='myHeader'>
        <img src={logo} alt="logo" className='myHeaderLogo'/>
        <nav className={showNav? 'myHeaderNav show_nav' : 'myHeaderNav'}>
            <NavLink style={activeLink} to="/" onClick={handleClick}>Home</NavLink>
            <NavLink style={activeLink} to="/about" onClick={handleClick}>About us</NavLink>
            <NavLink style={activeLink} to="/course" onClick={handleClick}>Courses</NavLink>
            <NavLink style={activeLink} to="/contact" onClick={handleClick}>Contact Us</NavLink>
            <NavLink style={activeLink} to="/login" onClick={handleClick}>Login</NavLink>
            <NavLink style={activeLink} to="/register" onClick={handleClick}>Register</NavLink>
        </nav>

        <img src={menu} alt="menu" className='menu' onClick={handleClick}/>

    </header>
  )
}
