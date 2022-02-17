import {Navigate,Outlet} from 'react-router-dom'
import React from 'react'
import { CurrentUser } from '../../stores/actions';

// const PrivateRoute =({ isLogged }) =>{
//   return isLogged ? <Outlet /> : <Navigate to="/login" />;
// }
const PrivateRoute =({  }) =>{
  if (CurrentUser.id!=='undefined'){
    
    <Outlet/>
  }
  else{
    <Navigate to="/login"/>
    
  }


}


export default PrivateRoute