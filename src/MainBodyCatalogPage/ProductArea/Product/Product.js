import React, { Component } from "react";
import "./Product.css";
const imageBasePath = "https://image.tmdb.org/t/p/w500";

class Product extends Component {
  render() {
    return (
      <div className="ProductContainer" onClick={() => this.props.handleClick()}  >

        <div className="Product">
          <div className="Image">
            <img
              className="ImageTag"
              src={imageBasePath + this.props.image}
              alt="this is awesome"
            />
          </div>
          <div className="BelowImage">
            <div className="Price-Desc">
              <div className="Desc">
                <h3> {this.props.title} </h3>
              </div>
              <div className="Prices">
                <div className="Real-Price">{this.props.popularity}</div>
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
