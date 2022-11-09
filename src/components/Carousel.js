import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { activities } from '../data'
import './Carousel.css'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <div className='carousel'>
        <div className="subtitle">Lorem ipsum dolor sit Lorem ipsum dolor sit</div>
        <div className="title">Lorem ipsum dolor sit amet Lorem ipsum dolor</div>
        <Slider {...settings}>
            {
                activities.map( (activity) => (
                    <div className="c-card" key={activity.id}>
                        <div className="c-top">
                            <div className="date">
                                <div className="date-up">*Start from</div>
                                <div className="date-down">{activity.date}</div>
                            </div>
                            <div className="name">{activity.name}</div>
                            <img src={activity.imglink} alt="activity" />
                        </div>

                        <div className="c-bottom">
                            <div className="intro">{activity.intro}</div>
                            <div className="host">{activity.host}</div>
                            <div className="type">
                                <div className="duration">{activity.duration}</div>
                                <div className="frequency">{activity.frequency}</div>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </Slider>
        <div className='more'>MORE OPPORTUNITIES</div>
    </div>
  )
}

export default Carousel