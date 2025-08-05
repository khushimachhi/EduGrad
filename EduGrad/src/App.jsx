import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='OUR PROGRAMS' title='What We Offer'/>
      <Programs/>
      <About/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Students Say'/>
      <Testimonial/>
    </div>
    
    </>
  )
}

export default App