import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="ProductContainer">
        <div className="Product">
          <div className="Image">{this.props.image}</div>
          <div className="BelowImage">
            <div className="Price-Desc">
              <div className="Desc">
                <h3>{this.props.name}</h3>
              </div>
              <div className="Prices">
                <div className="Real-Price">{this.props.price}</div>
                <div className="Discount_Price" />
                <div className="Percentage" />
              </div>
            </div>
            <div className="Wishlist" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
