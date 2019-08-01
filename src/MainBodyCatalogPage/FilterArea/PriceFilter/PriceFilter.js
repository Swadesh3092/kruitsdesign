import React, { Component } from "react";
import "./PriceFilter.css";

export default class PriceFilter extends Component {
  render() {
    return (
      <div className="PriceFilter">
        <div className="Pricelabel">
          <h2>Price</h2>
        </div>
        <div className="PriceCheckbox">
          <ul>
            <li>
              <input type="checkbox" /> checkbox 1
            </li>
            <li>
              <input type="checkbox" /> checkbox 2
            </li>
            <li>
              <input type="checkbox" /> checkbox 3
            </li>
            <li>
              <input type="checkbox" /> checkbox 4
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
