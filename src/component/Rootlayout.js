import React ,{useContext, useEffect}from 'react'
import { Outlet , NavLink} from 'react-router-dom';
import './Rootlayout.css';
import {loginContext} from '../contexts/loginContent'

function Rootlayout() {
    
  const [currentUser,loginErr,userloginStatus,loginUser,logoutUser]  = useContext(loginContext); 
 
  
  return (
    <div>
        
     <ul className="nav d-flex flex-row justify-content-center  bg-dark p-2 navbar ">
  {currentUser.userType==='admin' ? (
  <div className='d-flex flex-row'>
      <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/careCard">
                view careCard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/ViewPost">
                ViewPost
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light glow-on-hover" to="/Yoga">
               view  Yoga
              </NavLink>
            </li>
    <li className="nav-item">
              <NavLink className="nav-link text-light" to="/YogaAsanas">
                Add Yoga
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/careTaker">
                Add careTaker
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/AddPost">
                AddPost
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Login" 
              onClick={logoutUser}
              >
                Logout
              </NavLink>
            </li>
  
  </div>)
  :currentUser.userType==='user'?
  (
    <div className='d-flex flex-row'>
       <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">
                Home
              </NavLink>
            </li>
      <li className="nav-item">
              <NavLink className="nav-link text-light" to="/careCard">
                careCard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/ViewPost">
                ViewPost
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light glow-on-hover" to="/Yoga">
                Yoga
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Tourism">
                Tourism
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Login" 
              onClick={logoutUser}
              >
                Logout
              </NavLink>
            </li>
  
  </div>

  )
  :
  (
    
  <div className='d-flex flex-row'>
    <li className="nav-item"> 
              <NavLink className="nav-link text-light" to="/Login">
                login 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Register">
                Register
              </NavLink>
            </li>
  </div>)
  }
</ul>
<div className="outlet-container">
    <Outlet/>
</div>
<div className='bg-secondary bg-opacity-25 p-5 text-center'>
    <p >Footer</p>
</div>
    </div>
  )
}

export default Rootlayout