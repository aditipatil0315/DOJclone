import React, { useState } from "react";
import TopBar from "../TopBar";
import "./Page_1.css";
import MidBar from "../MidBar";
import Navbar from "../Navbar";

const Page_1 = () => {
  const [isVisible, setIsvisible] = useState(false);

  return (
    <div>
      <div className="page_1">
        <div className="chat_box">
          {isVisible ? (
            <div className="messages">
              <input type="text" placeholder="Search here" />
              <i class="fa-solid fa-xmark" onClick={() => setIsvisible(false)}></i>
              <h3>ChatBox is here to help you -</h3>
              <p>Answers to your question will appear here.</p>
            </div>
          ) : (
            <div className="chat_icon" onClick={() => setIsvisible(true)}>
              <div className="icon">
              <i class="fa-solid fa-hand-holding-hand"></i>              </div>
              <p> ChatBox</p>
              
            </div>
          )}
        </div>

        <TopBar />
        <MidBar />
        <Navbar />
        {/* <Content/>*/}
      </div>
    </div>
  );
};

export default Page_1;
