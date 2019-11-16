import React, { Component } from "react";

import Product from "./ProductArea/Product/Product.js";
import PriceFilter from "./FilterArea/PriceFilter/PriceFilter.js";
import ColorFilter from "./FilterArea/ColorFilter/ColorFilter.js";
import DiscountFilter from "./FilterArea/DiscountFilter/DiscountFilter.js";
import GenderFilter from "./FilterArea/GenderFilter/GenderFilter.js";
import StoreFilter from "./FilterArea/StoreFilter/StoreFilter.js"
import CategoryFilter from "./FilterArea/CategoryFilter/CategoryFilter.js";
import BrandFilter from "./FilterArea/BrandFilter/BrandFilter.js";
import { withRouter } from 'react-router-dom';
import "./MainBodyCatalogPage.css";


class MainBodyCatalog extends Component {
  state = {
    allMovies: [],
    filterData: []
  };

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d466811a6b256c8fc0e6c0c21d1531b2&page=1";
    const response = await fetch(url);
    const data = await response.json();

    data.results &&
      this.setState({ allMovies: data.results, filterData: data.results });
  }
  render() {
    return (
      <div className="BodyContainer">
        <div className="BodyContainer2">
          <div className="FilterContainer">
            <div className="FilterContainer2">
              <div className="FilterContainer3">

                <GenderFilter/>
                <CategoryFilter/>
                <BrandFilter/>
                <StoreFilter/>
                <PriceFilter
                  onclick={val => {
                    if (val) {
                      this.setState({
                        filterData: this.state.allMovies.filter(
                          movie => movie.popularity > val
                        )
                      });
                    } else {
                      this.setState({
                        filterData: this.state.allMovies
                      });
                    }
                  }}
                />
                <ColorFilter />
                <DiscountFilter />
              </div>
            </div>
          </div>
          <div className="AllProductsContainer">
            <div className="AllProductsContainer1" >

              {this.state.filterData.map((item, index) => {
                return (
                  <Product
                    key={index}
                    title={item.title}
                    popularity={item.popularity}
                    image={item.poster_path}
                    // handleClick={() =>
                    //   this.props.history.push('https://www.myntra.com/tshirts/nike/nike-men-red-printed-standard-fit-jdi-3-round-neck-t-shirt/10139163/buy')
                    // }
                  />
                );
              })}

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(MainBodyCatalog);
