import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import { GrClose } from 'react-icons/gr'


const Login = () => {
  return (
    <div className='login'>
      <div className="container">
          <div className="logo">
             <img src="/img/logo.png" alt="logo" />
             <Link to='/'><GrClose /></Link>
          </div>
          <h1>Welcome back</h1>
          <form action="">
              <div className="item">
                <label htmlFor="">EMAIL ADDRESS</label>
                <br />
                <input type="email" placeholder='e.g. email@address.com' />
              </div>
              <div className="item">
                <label htmlFor="">PASSWORD</label>
                <br />
                <input type="password" placeholder='Your password' />
              </div> 
              <button>LOG IN</button>
          </form>
          <hr />
          <div className="text">
              <a href="">Forgot password?</a>
              <p>Don't have an account yet?</p>
              <a href="">Sign Up </a><span>now for free!</span>
          </div>
         
  
      </div>

    </div>
  )
}

export default Login