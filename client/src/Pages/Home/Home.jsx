import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  )
}

export default Home