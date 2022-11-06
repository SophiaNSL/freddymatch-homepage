import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
            <img src="/img/logo.svg" alt="logo" />
            <ul>
                <Link to='/login' style={{ textDecoration: 'none' }}><li>log in</li></Link>
                <li>Sign up</li>
                <li className='find'>FIND VOLUNTEERS</li>
            </ul>
       
    </div>
  )
}

export default Navbar