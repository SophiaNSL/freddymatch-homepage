import React from 'react'
import './Heroimg.css'


const Heroimg = () => {
  return (
    <div className='heroimg'>
        <div className="upper">
            <h1>Lorem ipsum dolor sit?</h1>
            <h3>Lorem ipsum dolor sit amet.</h3>
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
                    <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore perspiciatis minus.</div>
                </div>
            </div>
            <div className="box">
                <div className="num">2</div>
                <div className="text">
                    <div className="title">MATCH</div>
                    <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore.</div>
                </div>
            </div>
            <div className="box">
                <div className="num">3</div>
                <div className="text">
                    <div className="title">VOLUNTEER</div>
                    <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur inventore.</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Heroimg