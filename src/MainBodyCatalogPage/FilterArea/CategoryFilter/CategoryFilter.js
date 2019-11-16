import React, { Component } from "react";
import "./CategoryFilter.css";


export default class CategoryFilter extends Component {
  render() {
    return (
      <div className="CategoryFilter">
        <div className="CategoryFilter2">
          <div className="CategoryLabel">
            <div className="CategoryLabel2">
              <h2 className="CategoryLabelWord FilterHeader">Category</h2>
            </div>
          </div>
          <div className="Categoryboxes">
            <div className="Categoryboxes-line1">
              <div className="Categoryboxes2-line1">
                
                <ul className="CategoryFilterListOuter FilterUnorderedList">
                <li className="PriceFilterListInner">
              <input
                type="checkbox" 
                className="checkbox checkbox9" 
                
              /><label htmlFor="price-filter-checkbox1">
               
              T-Shirts</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
               
              /><label htmlFor="price-filter-checkbox2">Shirts</label></li>


            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox3">Trousers</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox4">Jeans</label>
            </li>     
                  
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
