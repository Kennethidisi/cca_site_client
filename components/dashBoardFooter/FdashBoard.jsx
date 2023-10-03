import React, { useContext } from 'react'
import "./fdashBoard.css"
import { myContext } from '../../context/AppContext'

export default function FdashBoard() {
  const {theme} = useContext(myContext)
  return (
    <footer className="fDashBoard" style={{backgroundColor: theme? '#111' : 'white', color: theme? 'white' : "black"}}>
        <p>&copy;Copyright {new Date().getFullYear()}. All rights reserved. Powered by Codeprof Academy. Designed by Kenneth</p>
    </footer>
  )
}
