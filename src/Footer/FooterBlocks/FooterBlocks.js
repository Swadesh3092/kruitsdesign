import React, { Component } from "react";
import "./Footer1/Footer1.js";
import "./FooterBlocks.css";

export default class FooterBlocks extends Component {
  render() {
    return (
      <div className="FooterBlocks">
        {this.props.name}
        {this.props.name1}
        {this.props.name2}
        {this.props.name3}
      </div>
    );
  }
}
