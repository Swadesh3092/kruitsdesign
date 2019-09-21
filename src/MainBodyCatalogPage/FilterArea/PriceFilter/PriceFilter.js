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
          <h2>Price</h2>
        </div>
        <div className="PriceCheckbox">
          <ul>
            <li>
              <input
                type="checkbox"
                name="kaddu"
                checked={this.state.priceVal === 100 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(100))}
              />
              Above 100
            </li>
            <li>
              <input
                type="checkbox"
                checked={this.state.priceVal === 120 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(120))}
              />
              checkbox 2
            </li>
            <li>
              <input
                type="checkbox"
                checked={this.state.priceVal === 80 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(80))}
              />{" "}
              checkbox 3
            </li>
            <li>
              <input
                type="checkbox"
                checked={this.state.priceVal === 50 ? true : false}
                onChange={() => this.props.onclick(this.checkPriceVal(50))}
              />{" "}
              checkbox 4
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
