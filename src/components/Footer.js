import React from 'react'
import './Footer.css'
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'



const Footer = () => {
  return (
    <div className='footer'>
        
        <div className="up">
            <div className="left">
                <img src="/img/20.svg" alt="logo" />
                <div className="icons">
                    <ImFacebook2 className='icon'/>
                    <BsInstagram className='icon'/>
                    <BsLinkedin className='icon'/>
                    <BsYoutube className='icon last'/>
                </div>
                <div className="links">
                    <a href="#">Terms & Conditions</a>
                    <a href="#"> · Privacy</a>
                </div>
            </div>
            <div className="info">
                <div className="box">
                    <div className="text1">VOLUNTEERS</div>
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                </div>
                <div className="box">
                    <div className="text1">FIND VOLUNTEERS</div>
                    <a href="#">Resources</a>
                    <a href="#">Submit an enquiry</a>
                </div>
                <div className="box">
                    <div className="text1">SUPPORT</div>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
            <div className="right">
                <img src="/img/21.png" alt="logo" />
                <button>DONATE</button>
                <a href="#">Powered by PayPal</a>
            </div>
        </div>

        <div className="middle">
        We pay respect to elders past, present and emerging and humbly acknowledge all First Nations people. We acknowledge the Yugambeh and Bundjalung peoples, where Freddy was born, lived and passed away and are grateful for the deep connection we feel to Pooningbah. We recognise the wisdom and positive contribution of First Nations people to the health and wellbeing of our communities through cultural heritage, values and beliefs.
        </div>
        <div className="down">
            <div className="text1">2022, FreddyMatch. All rights reserved.</div>
            <div className="text1">FreddyMatch is licensed to the Freddy Bear Foundation, a registered charity. ABN 44 633 434 716</div>
        </div>
    
    </div>
  )
}

export default Footer