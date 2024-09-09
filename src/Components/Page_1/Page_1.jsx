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
            <div
              className="messages"
              // style={{ width: "100%", height: "500px" }}
            >
              <i class="fa-solid fa-xmark" onClick={ () => setIsvisible(false)}></i>
              <iframe
                className="iframe_box"
                src="http://localhost:8501"
                title="AI Chat"
                // style={{ border: "none", width: "100%", height: "100%" }}
              ></iframe>
            </div>
          ) : (
            <div className="chat_icon" onClick={() => setIsvisible(true)}>
              <div className="icon">
                <i className="fa-solid fa-hand-holding-hand"></i>
              </div>
              <p>ChatBox</p>
            </div>
          )}

          {/* {isVisible ? (
            <div className="messages">
              
                <iframe src="http://localhost:8501" title="AI Chat" style="border: none;"></iframe>
            


            </div>
          ) : (
            <div className="chat_icon" onClick={() => setIsvisible(true)}>
              <div className="icon">
              <i class="fa-solid fa-hand-holding-hand"></i>              </div>
              <p> ChatBox</p>
              
            </div>
          )} */}
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
