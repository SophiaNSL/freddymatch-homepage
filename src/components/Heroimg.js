import React from 'react'
import './Heroimg.css'


const Heroimg = () => {
  return (
    <div className='heroimg'>
        <div className="upper">
            <h1>Who needs my help?</h1>
            <h3>Find volunteering opportunities on FreddyMatch</h3>
        </div>

        <div className="middle">
            <input type="text" placeholder='keyword. e.g. environment' />
            <button>EXPLORE</button>
        </div>

        <div className="down">
            <div className="box">
                <div className="num">1</div>
                <div className="text">
                    <div className="title">EXPLORE</div>
                    <div className="content">Browse opportunities or sign up to see volunteering opportunities tailored to you.</div>
                </div>
            </div>
            <div className="box">
                <div className="num">2</div>
                <div className="text">
                    <div className="title">MATCH</div>
                    <div className="content">Find something you like? Complete a super simple application and we do the rest.</div>
                </div>
            </div>
            <div className="box">
                <div className="num">3</div>
                <div className="text">
                    <div className="title">VOLUNTEER</div>
                    <div className="content">It is that easy... the organisation you applied to will contact you soon.</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Heroimg