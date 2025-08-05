import React from 'react'
import './Testimonial.css'
import left_arrow from '../../assets/left_arrow.png'
import right_arrow from '../../assets/right_arrow.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'
import user_5 from '../../assets/user_5.jpg'

const Testimonial = () => {
  return (
    <div className='testomial'>
        <img src={left_arrow} className='back-btn'/>
        <img src={right_arrow} className='next-btn'/>
        <div className="slider"></div>
    </div>
  )
}

export default Testimonial