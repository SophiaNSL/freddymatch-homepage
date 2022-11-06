import React from 'react'
import './ScrollToTop.css'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
   
  const[scrollToTopButton, setScrollToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if( window.scrollY >1200){
            setScrollToTopButton(true)
        }else {
            setScrollToTopButton(false)
        }
    })
  },[scrollToTopButton])

  const scrollToTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
  }

  return (
    <div className='sttBtn'>
        {scrollToTopButton && (
            <button onClick={scrollToTop}>TOP</button>
        )}     
    </div>
  )
}

export default ScrollToTop