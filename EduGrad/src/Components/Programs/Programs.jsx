import React from 'react'
import'./Programs.css'
import user_1 from '../../assets/user-image-1.jpg'
import user_2 from '../../assets/user-image-2.jpg'
import user_3 from '../../assets/user-image-3.jpg'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.png'
import program_3 from '../../assets/program_3.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={user_1} alt=""/>
            <div className="caption">
            <img src={program_1} alt=''/>
            <p>Graduation Degree</p></div>
            </div>
        <div className="program">
            <img src={user_2} alt=""/>
        <div className="caption">
            <img src={program_2} alt=''/>
            <p>Graduation Degree</p></div>
            </div>
        <div className="program">
            <img src={user_3} alt=""/>
            <div className="caption">
            <img src={program_3} alt=''/>
            <p>Graduation Degree</p></div>
            </div>
    </div>
  )
}

export default Programs