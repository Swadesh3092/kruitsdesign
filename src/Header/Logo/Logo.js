import React, { Component } from "react";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return <div className="LogoContainer" >
      <div className="LogoContainer2">
        <img className="Logo" alt="Kruitslogo" src={require("./logo.png")} />
      </div>
    </div>;
  }
}
