import React from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Highlights from '../Components/Highlights'
import Testimonials from '../Components/Testimonials'

function Homepage() {
  return (
    <>
    <HeroSection/>
    <Highlights/>
    <Testimonials/>
    <About/>
    <Footer/>
    </>
  )
}

export default Homepage