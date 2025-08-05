import React from 'react'
import './About.css'
import about_image from '../../assets/about-image.jpg'
import play_image from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_image} alt="about" className="about-img"/>
        </div>
        <div className="about-right">
            <h3>ABOUT EDUGRAD</h3>
            <h2>Building a Better Tomorrow</h2>
            <p>EduGrad is a modern educational platform committed to empowering learners at every stage of their 
                academic journey. Whether you're a student, educator, or lifelong learner, we provide access to 
                high-quality resources, expert-led programs, and an inclusive community designed to help you thrive.</p>
                <p>We believe education should be accessible, engaging, and future-ready. Through interactive tools,
                     real-world projects, and personalized guidance, our goal is to make learning not just effective,
                      but inspiring — preparing individuals to achieve their goals and shape a better tomorrow.</p>
                <p>At EduGrad, we continuously strive to innovate how education is delivered and experienced. 
                By integrating modern technologies with expert-designed curriculum, we create a dynamic environment
                where students not only gain knowledge but also develop critical thinking, creativity, and 
                problem-solving skills essential for success in today’s world.</p>
        </div>
    </div>
  )
}

export default About