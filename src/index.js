import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import Navbar from './components/navbar'
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profil from './pages/Profil'
 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profil" element={<Profil/>}/>
    </Routes>   
    </BrowserRouter>
  </div>
   )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
