import React from 'react'
import './PicLists.css'
import { pictures } from '../data'
import Pic from './Pic'

const PicLists = () => {
  return (
    <div className='picLists'>
        <div className="text">
            <div className="text1">Lorem ipsum dolor sit amet?</div>
            <div className="text2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div className="text2"> Soluta, aperiam. Soluta, aperiam.</div>
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