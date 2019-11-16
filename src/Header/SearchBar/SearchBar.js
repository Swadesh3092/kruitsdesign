import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
           <div className="SearchBarContainer">
             
             
            <input placeholder="Search Here. Why Go Everywhere" autoCorrect="off" className="SearchBarInput" />
            
            
           </div>)
  }
}
