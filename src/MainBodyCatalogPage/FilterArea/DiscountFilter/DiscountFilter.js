import React, { Component } from "react";
import "./DiscountFilter.css";

export default class DiscountFilter extends Component {
  render() {
    return (
      <div className="DiscountFilter">
        <div className="DiscountFilter2">
          <div className="Discountlabel">
            <div className="Discountlabel2">
              <h2 className="DiscountlabelWord FilterHeader">Discount Range</h2>
            </div>
          </div>
          <div className="DiscountCheckbox">
            <div className="DiscountCheckbox2">
              <ul className="DiscountCheckboxList FilterUnorderedList">
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /> <label htmlFor="discount-filter-checkbox1">10% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox"  className="checkbox"/> <label htmlFor="discount-filter-checkbox1">20% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /> <label htmlFor="discount-filter-checkbox1">30% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /> <label htmlFor="discount-filter-checkbox1">40% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /><label htmlFor="discount-filter-checkbox1">50% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /> <label htmlFor="discount-filter-checkbox1">60% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /> <label htmlFor="discount-filter-checkbox1">70% and above</label>
            </li>
                <li className="DiscountFilterListInner">
                  <input type="checkbox" className="checkbox" /> <label htmlFor="discount-filter-checkbox1">80% and above</label>
            </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
