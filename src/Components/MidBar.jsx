import React from 'react'
import './MidBar.css'
import logo_one from '../assets/75.jpg'
import logo_two from '../assets/G2.jpg'


const MidBar = () => {
  return (
    <div className='main'>
        <div className="content">
            <div className="one">
            <i class="fa-solid fa-scale-balanced"></i>
                <div className="lines">

                <p>न्याय विभाग </p>
                <h3>
                    DEPARTMENT OF JUSTICE
                </h3>
                </div>

            </div>
            <div className="two">
                <img src= {logo_one} alt="" />
                <img src= {logo_two} alt="" />

            </div>
        </div>
    </div>
  )
}

export default MidBar