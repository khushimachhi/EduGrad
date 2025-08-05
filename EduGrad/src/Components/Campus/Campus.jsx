import React from 'react'
import './Campus.css'
import campus1 from '../../assets/campus1.jpg'
import campus2 from '../../assets/campus2.jpg'
import campus3 from '../../assets/campus3.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <p>GALLERY</p>
        <h2>Our Campus</h2>
        <div className="gallery">
            <div className='photos'>
                    <div className="photograph">
                        <img src={campus1} alt=""/>
                        </div>
                    <div className="photograph">
                        <img src={campus2} alt=""/>
                        </div>
                    <div className="photograph">
                        <img src={campus3} alt=""/>
                        </div>
                </div>
                <button className='btn dark-btn'> See more here </button>
            </div>
    </div>
  )
}

export default Campus