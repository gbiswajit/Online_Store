import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import GoToTop from '../../Components/GoToTop'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <FeaturedProducts/>
      <Categories/>
      <Contact/>
      <Footer/>
      <GoToTop/>
    </div>
  )
}

export default Home