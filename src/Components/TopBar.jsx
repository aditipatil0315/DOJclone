import React from 'react'
import './TopBar.css'
import logo_1 from '../assets/75.jpg'
import logo_2 from '../assets/G2.jpg'

const TopBar = () => {
  return (
    <div>
        <div className="topbar">
            <div className="text">
                <div className="left">
                <p>Ministry of law and justice, Government of India</p>
                </div>
                <div className="right">

                <p>SKIP TO MAIN CONTENT</p>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-message"></i>
                <i class="fa-solid fa-sitemap"></i>
                <i class="fa-solid fa-person"></i>
                <p>ENGLISH</p>
                </div>
            </div>
            


        </div>
    </div>
  )
}

export default TopBar