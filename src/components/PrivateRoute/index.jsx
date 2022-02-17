import {Navigate,Outlet} from 'react-router-dom'
import React from 'react'

const PrivateRoute =({ isLogged }) =>{
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}



export default PrivateRoute