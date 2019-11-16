import React, { Component } from "react";
import "./Product.css";
const imageBasePath = "https://image.tmdb.org/t/p/w500";

class Product extends Component {
  render() {
    return (
      <div className="ProductContainer" onClick={() => this.props.handleClick()}  >
        <a href="https://www.myntra.com/tshirts/nike/nike-men-red-printed-standard-fit-jdi-3-round-neck-t-shirt/10139163/buy">
        <div className="Product">
          <div className="Image">
            <img
              className="ImageTag"
              src={imageBasePath + this.props.image}
              alt="this is awesome"
            />
          </div>
          <div className="BelowImage1">
            <div className="PriceandDesc">
              <div className="Desc">
                <h3> {this.props.title} </h3>
              </div>
              <div className="Prices">
                <div className="Prices1">
                  <div className="Real-Price">
                    <div className="Real-Price1">{this.props.popularity}</div>
                  </div>
                  <div className="Discount_Price">
                    <div className="Discount_Price1">Rs 500
                  </div>

                  </div>
                  <div className="Percentage" >
                    <div className="Percentage1">
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="BuynowandWishlist">
                <div className="BuyNow">
                  <div className="BuyNow1">
                    BUY NOW
                  </div>
                </div>
                {/* <div className="Wishlist">
                  <div className="Wishlist1">
                    WISHLIST
                  </div>

                </div> */}
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    );
  }
}

export default Product;
