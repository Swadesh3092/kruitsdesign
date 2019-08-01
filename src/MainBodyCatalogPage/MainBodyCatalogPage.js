import React, { Component } from "react";
import Product from "./ProductArea/Product/Product.js";
import PriceFilter from "./FilterArea/PriceFilter/PriceFilter.js";
import ColorFilter from "./FilterArea/ColorFilter/ColorFilter.js";
import DiscountFilter from "./FilterArea/DiscountFilter/DiscountFilter.js";
import "./MainBodyCatalogPage.css";
const allProducts = [
  {
    name: "Sadee",
    image: "url",
    price: 399,
    discountedPrice: 299,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Huiu",
    image: "url",
    price: 877,
    discountedPrice: 455,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Sadee",
    image: "url",
    price: 399,
    discountedPrice: 299,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Huiu",
    image: "url",
    price: 877,
    discountedPrice: 455,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Sadee",
    image: "url",
    price: 399,
    discountedPrice: 299,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Huiu",
    image: "url",
    price: 877,
    discountedPrice: 455,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Sadee",
    image: "url",
    price: 399,
    discountedPrice: 299,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Huiu",
    image: "url",
    price: 877,
    discountedPrice: 455,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Sadee",
    image: "url",
    price: 399,
    discountedPrice: 299,
    description: "jlkhkl hlkhlk hlkhlk"
  },
  {
    name: "Huiu",
    image: "url",
    price: 877,
    discountedPrice: 455,
    description: "jlkhkl hlkhlk hlkhlk"
  }
];

class App extends Component {
  render() {
    return (
      <div className="BodyContainer">
        <div className="FilterContainer">
          <PriceFilter />
          <ColorFilter />
          <DiscountFilter />
        </div>
        <div className="AllProductsContainer">
          {allProducts.map((item, index) => {
            return (
              <Product image={item.image} name={item.name} price={item.price} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
