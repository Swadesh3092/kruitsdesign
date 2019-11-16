import React, { Component } from "react";
import FooterBlocks from "./FooterBlocks/FooterBlocks.js";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterContainerInner">
         
          <FooterBlocks/>
          
        </div>
      </div>
    );
  }
}
