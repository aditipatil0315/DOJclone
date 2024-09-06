import React from 'react'
import TopBar from "../TopBar"
import './Page_1.css'
import MidBar from '../MidBar'
import Navbar from '../Navbar'


const Page_1 = () => {
  return (
    <div>
        <div className="page_1">
            <TopBar/>
            <MidBar/>
            <Navbar/>
            {/* <Content/>*/}

        </div>
        
        
    </div>
  )
}

export default Page_1