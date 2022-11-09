import React from 'react'
import './Footer.css'
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <div className='footer'>
        
        <div className="up">
            <div className="left">
                <img src="/img/logo1.png" alt="logo" />
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
                    <Link to='/login' style={{ textDecoration: 'none' }}><a>Log in</a></Link>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, eligendi sit! Nulla iusto inventore beatae explicabo ipsum eligendi hic iste delectus fugit iure dolorum tempora harum nam labore perspiciatis debitis quae ipsa officiis pariatur exercitationem, dolores quibusdam provident minus. Nihil?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt harum iure, quidem neque laboriosam vitae pariatur alias dolores illum fugiat ut accusamus nihil quo non modi? Magnam deleniti ullam, numquam molestias reprehenderit eos eum fugiat labore quidem consequatur id itaque.
        </div>
        <div className="down">
            <div className="text1">2022, Sophia-webdev. All rights reserved.</div>
            <div className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusamus. adipisicing elit.</div>
        </div>
    
    </div>
  )
}

export default Footer