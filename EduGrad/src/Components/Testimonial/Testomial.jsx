import React from 'react'
import './Testimonials.css'
import left_arrow from '../../assets/left_arrow.png'
import right_arrow from '../../assets/right_arrow.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'
import user_5 from '../../assets/user_5.jpg'

const Testomial = () => {
  return (
    <div className='testomial'>
        <img src={left_arrow} className='back-button'/>
        <img src={right_arrow} className='next-button'/>
        <div className="slider"></div>
    </div>
  )
}

export default Testomial