 import {Link} from 'react-router-dom'
import React from 'react'
import "./index.css"
const Navbar =()=>{
  return (
<div className="Navbar">
    <Link className="Nav" to="/">Home</Link>
   <Link className="Nav" to="/register">Register</Link>
   <Link className="Nav" to="/login">Login</Link>
   <Link className="Nav" to="/profil">Profil</Link>
  </div>
  )
  
  
}
export default Navbar