import React from 'react'
import './PicLists.css'
import { pictures } from '../data'
import Pic from './Pic'

const PicLists = () => {
  return (
    <div className='picLists'>
        <div className="text">
            <div className="text1">WHAT ARE YOU PASSIONATE ABOUT?</div>
            <div className="text2">From gardening to web development, we have a</div>
            <div className="text2">volunteering opportunity for you!</div>
        </div>
       
        <div className="lists">
            {
                pictures.map( item => (
                    <Pic picture={item} key={item.id}/>
                ))
            }
        </div>
        


    </div>
  )
}

export default PicLists