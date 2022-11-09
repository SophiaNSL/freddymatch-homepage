import React from 'react'
import './Partners.css'
import { BiBuildingHouse } from 'react-icons/bi'
import { BsHouse } from 'react-icons/bs'
import { GiHandBag } from 'react-icons/gi'
import { BsHeart } from 'react-icons/bs'

const Partners = () => {
  return (
    <div className='partners'>
       <div className="text-title">
          <div className="text1">Lorem ipsum dolor sit</div>
          <div className="text2">Lorem ipsum dolor sit, amet consectetur adipisicing elit!</div>
       </div>

       <div className="orgs">
           <div className="orgs-box">
               <div className="icon">
                  <BiBuildingHouse />
               </div>
               <div className="title">Lorem ipsum</div>
               <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, assumenda.</div>
           </div>

           <div className="orgs-box">
               <div className="icon">
                  <BsHouse />
               </div>
               <div className="title">Lorem ipsum</div>
               <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, assumenda.</div>
           </div>

           
           <div className="orgs-box">
               <div className="icon">
                  <GiHandBag />
               </div>
               <div className="title">Lorem ipsum</div>
               <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, assumenda.</div>
           </div>

           <div className="orgs-box">
               <div className="icon">
                  <BsHeart />
               </div>
               <div className="title">Lorem ipsum</div>
               <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, assumenda.</div>
           </div>
       </div>
     
        <div className="resister">
             <div className="left">
                 <div className="title">
                 Lorem ipsum dolor ipsum dolor
                 </div>
                 <div className="content">
                 Lorem ipsum dolor sit amet consectetur adipisicing. 
                 </div>
                 <div className="content">
                 opportunities
                 </div>
             </div>
             
            <div className="right">
                 <button>CREATE YOUR ACCOUNT</button>
                 <p>It's free!</p>
            </div>
        </div>
    </div>
  )
}

export default Partners