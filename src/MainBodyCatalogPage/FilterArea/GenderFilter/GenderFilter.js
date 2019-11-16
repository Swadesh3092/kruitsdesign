import React, { Component } from "react";
import "./GenderFilter.css";


export default class GenderFilter extends Component {
  render() {
    return (
      <div className="GenderFilter">
        <div className="GenderFilter2">
          <div className="GenderLabel">
            <div className="GenderLabel2">
              <h2 className="GenderLabelWord FilterHeader">Gender</h2>
            </div>
          </div>
          <div className="Genderboxes">
            <div className="Genderboxes-line1">
              <div className="Genderboxes2-line1">
                
                <ul className="GenderFilterListOuter FilterUnorderedList">
                <li className="PriceFilterListInner">
              <input
                type="checkbox" 
                className="checkbox checkbox9" 
                
              /><label htmlFor="price-filter-checkbox1">
               
              Men</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
               
              /><label htmlFor="price-filter-checkbox2">Women</label></li>


            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox3">Girls</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox4">Boys</label>
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
