import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
            <img src="/img/logo.svg" alt="logo" />
            <ul>
                <li>log in</li>
                <li>Sign up</li>
                <li className='find'>FIND VOLUNTEERS</li>
            </ul>
       
    </div>
  )
}

export default Navbar