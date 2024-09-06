import React from 'react'
import './Navbar.css'
import banner_img from '../assets/banner_2.jpg'

const Navbar = () => {
  return (
    <div className='navbar_content'>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Administration of Justice</li>
                <li>National Mission</li>
                <li>eCourts MMP</li>
                <li>Access to Justice</li>
                <li>Samvidhan@75</li>
                <li>Media Corner</li>
            </ul>
            <div className="icon">
            <i class="fa-solid fa-bars"></i>
            </div>

        </div>

        
        <div className="banner_img">
            <img src= {banner_img} alt="" />
        </div>


        <div className="lower_bar">
            <div className="bar">
                <div className="text">
                    Latest News
                </div>
                <div className="lines">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quo adipisci! Sed. Lorem, ipsum dolor. 
                </div>

            </div>
        </div>

        <div className="middle_content">
            <div className="text_1">
                <h3>About Department</h3>
                <p>As per the Allocation of Business (Rules), 1961, Department of Justice is a part of Ministry of Law & Justice, Government of India. It is one of the oldest Ministries of the Government of India. Till 31.12.2009, Department of Justice was part of Ministry of Home Affairs and Union Home Secretary had been the Secretary of Department of Justice. Keeping in view the increasing workload and formulating many policies and programmes on Judicial Reforms in the country, a separate Department namely Department of Justice was carved out from MHA and placed under the charge of Secretary to Government of India and it started working as such from 1st January, 2010 under the Ministry of Law & Justice. The Department is housed in the Jaisalmer House, 26, Man Singh Road, New Delhi. The Organizational setup of the Department includes 04 Joint Secretaries, 08 Directors/ Deputy Secretaries and 09 Under Secretaries. The functions of the Department of Justice include the appointment, resignation and removal of the Chief Justice of India, Judges of the Supreme Court of India, Chief Justices and Judges of the High Courts and their service matters. In addition, the Department implements important schemes for Development of Infrastructure Facilities for Judiciary, setting up of Special Courts for speedy trial and disposal of cases of sensitive nature (Fast Track Special Court for cases of rape and POCSO Act), E-court Project on computerization of various courts across the country, legal aid to poor and access to justice, financial assistance to National Judicial Academy for providing training to the Judicial Officers of the country. The functions of Department of Justice are given in Allocation of Business (Rules), 1961</p>

            </div>
            <div className="text_2">
            <p>Whats New</p>
            <ul>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit!</li>
            </ul>

            </div>
            <div className="card">

            </div>
        </div>
        
    </div>
  )
}

export default Navbar