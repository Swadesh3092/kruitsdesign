import React, { Component } from "react";
import "./ColorFilter.css";


export default class ColorFilter extends Component {
  render() {
    return (
      <div className="ColorFilter">
        <div className="ColorFilter2">
          <div className="ColorLabel">
            <div className="ColorLabel2">
              <h2 className="ColorLabelWord FilterHeader">Color</h2>
            </div>
          </div>
          <div className="Colorboxes">
            <div className="Colorboxes-line1">
              <div className="Colorboxes2-line1">
                
                <ul className="ColorFilterListOuter FilterUnorderedList">
                <li className="PriceFilterListInner">
              <input
                type="checkbox" 
                className="checkbox checkbox9" 
                
              /><label htmlFor="price-filter-checkbox1">
               <div className="circular1"><div className="circularblack"></div></div> 
              Black</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
               
              /><label htmlFor="price-filter-checkbox2"><div className="circular1"><div className="circularblue"></div></div>Blue</label></li>


            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox3"><div className="circular1"><div className="circularyellow"></div></div>Yellow</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox4"><div className="circular1"><div className="circularorange"></div></div>Orange</label>
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
