import React, { Component } from "react";
import "./FooterBlocks.css";

export default class FooterBlocks extends Component {
  render() {
    return (
      <div className="FooterBlocks">
        <div className="FooterBlocksContainer">
         <div className="FooterButtons"><a href="./AboutUs"><button className="FooterLinks" >About Us</button></a></div>
          <div className="FooterButtons"><a href="./ContactUs"><button className="FooterLinks">Contact Us</button></a></div>
          <div className="FooterButtons"><a href="./Blog"><button className="FooterLinks">Blog</button></a></div>
         <div className="FooterButtons"><a href="./Cookie-Notice"><button className="FooterLinks">Cookie notice</button></a></div>
         <div className="FooterButtons"><a href="./Privacy-Policy"><button className="FooterLinks">Privacy Policy</button></a></div>
          <div className="FooterButtons"><a href="./Terms-Of-Service"><button className="FooterLinks">Terms of Service</button></a></div>
          
          </div>
      </div>
    );
  }
}
