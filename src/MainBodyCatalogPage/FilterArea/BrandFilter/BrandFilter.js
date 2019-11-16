import React, { Component } from "react";
import "./BrandFilter.css";


export default class BrandFilter extends Component {
  render() {
    return (
      <div className="BrandFilter">
        <div className="BrandFilter2">
          <div className="BrandLabel">
            <div className="BrandLabel2">
              <h2 className="BrandLabelWord FilterHeader">Brand</h2>
            </div>
          </div>
          <div className="Brandboxes">
            <div className="Brandboxes-line1">
              <div className="Brandboxes2-line1">
                
                <ul className="BrandFilterListOuter FilterUnorderedList">
                <li className="PriceFilterListInner">
              <input
                type="checkbox" 
                className="checkbox checkbox9" 
                
              /><label htmlFor="price-filter-checkbox1">
               
              Nike</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
               
              /><label htmlFor="price-filter-checkbox2">Adidas</label></li>


            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox3">U.S. Polo</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox4">Puma</label>
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
