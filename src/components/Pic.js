import React from 'react'
import './Pic.css'

const Pic = ({picture}) => {
  return (
    <div className='pic'>
        <div className="picImg">
            <img src={picture.imgLink} alt="pic" />
        </div>
        <div className="title">
            {picture.title}
        </div>
        <p>EXPLORE > </p>
    </div>
  )
}

export default Pic