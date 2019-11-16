import React, { Component } from "react";
import "./StoreFilter.css";


export default class StoreFilter extends Component {
  render() {
    return (
      <div className="StoreFilter">
        <div className="StoreFilter2">
          <div className="StoreLabel">
            <div className="StoreLabel2">
              <h2 className="StoreLabelWord FilterHeader">Store</h2>
            </div>
          </div>
          <div className="Storeboxes">
            <div className="Storeboxes-line1">
              <div className="Storeboxes2-line1">
                
                <ul className="StoreFilterListOuter FilterUnorderedList">
                <li className="PriceFilterListInner">
              <input
                type="checkbox" 
                className="checkbox checkbox9" 
                
              /><label htmlFor="price-filter-checkbox1">
               
              Chumbak</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
               
              /><label htmlFor="price-filter-checkbox2">Bewakoof</label></li>


            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox3">The Souled Store</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                
              />
              <label htmlFor="price-filter-checkbox4">Redwolf</label>
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
