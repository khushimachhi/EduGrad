import React from 'react'
import'./Programs.css'
import user_1 from '../../assets/user-image-1.jpg'
import user_2 from '../../assets/user-image-2.jpg'
import user_3 from '../../assets/user-image-3.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={user_1} alt=""/>
            <div className="caption">
            <p>Bachelor's Degree</p></div>
            </div>
        <div className="program">
            <img src={user_2} alt=""/>
        <div className="caption">
            <p>Master's Degree</p></div>
            </div>
        <div className="program">
            <img src={user_3} alt=""/>
            <div className="caption">
            <p>Post Graduation</p></div>
            </div>
    </div>
  )
}

export default Programs