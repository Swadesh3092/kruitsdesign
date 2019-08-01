import React, { Component } from "react";
import "./DiscountFilter.css";

export default class DiscountFilter extends Component {
  render() {
    return (
      <div className="DiscountFilter">
        <div className="Discountlabel">
          <h2>Discount Range</h2>
        </div>
        <div className="DiscountCheckbox">
          <ul>
            <li>
              <input type="checkbox" /> 10% and above
            </li>
            <li>
              <input type="checkbox" /> 20% and above
            </li>
            <li>
              <input type="checkbox" /> 30% and above
            </li>
            <li>
              <input type="checkbox" /> 40% and above
            </li>
            <li>
              <input type="checkbox" /> 50% and above
            </li>
            <li>
              <input type="checkbox" /> 60% and above
            </li>
            <li>
              <input type="checkbox" /> 70% and above
            </li>
            <li>
              <input type="checkbox" /> 80% and above
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
