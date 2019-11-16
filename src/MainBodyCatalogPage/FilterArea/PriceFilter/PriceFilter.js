import React, { Component } from "react";
import "./PriceFilter.css";

export default class PriceFilter extends Component {
  state = {
    kaddu: false,
    priceVal: 0
  };

  checkPriceVal(val) {
    if (val === this.state.priceVal) {
      val = 0;
    }
    this.setState({
      priceVal: val
    });

    return val;
  }

  render() {
    return (
      <div className="PriceFilter">
        <div className="Pricelabel">
          <div className="Pricelabel2">
            <h2 className="PricelabelWord FilterHeader">Price</h2>
          </div>
        </div>
        <div className="PriceCheckbox">
          <ul className="PriceFilterList FilterUnorderedList">
            <li className="PriceFilterListInner">
              <input
                type="checkbox" 
                className="checkbox"
                checked={this.state.priceVal === 100 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(100))}
              /><label htmlFor="price-filter-checkbox1">
              Above 100</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                checked={this.state.priceVal === 120 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(120))}
              /><label htmlFor="price-filter-checkbox2">Checkbox 2</label></li>


            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox"
                checked={this.state.priceVal === 80 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(80))}
              />
              <label htmlFor="price-filter-checkbox3">Checkbox 3</label>
            </li>
            <li className="PriceFilterListInner">
              <input
                type="checkbox" className="checkbox" background="yellow"
                checked={this.state.priceVal === 50 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(50))}
              />
              <label htmlFor="price-filter-checkbox4">Checkbox 4</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
