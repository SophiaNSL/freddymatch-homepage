import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from "../components/Heroimg";
import Carousel from "../components/Carousel";
import PicLists from "../components/PicLists";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Heroimg />
        <Carousel />
        <PicLists />
        <Partners />
        <Footer />
        <ScrollToTop />
    </div>
  )
}

export default Home