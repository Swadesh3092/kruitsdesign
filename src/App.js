import React, { Component } from "react";
import Route from 'react-router-dom/Route'
import Header from "./Header/Header.js"
import Footer from "./Footer/Footer.js"
import MainBodyProductPage from "./ProductPage/MainBodyProductPage/MainBodyProductPage.js";
import MainBodyCatalogPage from "./MainBodyCatalogPage/MainBodyCatalogPage.js";
// import Loadmore from "./Loadmore/Loadmore.js";
import HomePage from "./HomePage/HomePage.js";

import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
import IndividualPages from "./IndividualPages/IndividualPages.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="MainContainer">
          <div>
            <Header />
            <Route path="/"
              exact render={
                () => {
                  return (<HomePage />)
                }
              } />
            <Route path="/mens-tshirt"
              exact render={
                () => {
                  return (<MainBodyCatalogPage />)
                }
              } />
            <Route path="/product"
              exact render={
                () => {
                  return (<MainBodyProductPage />)
                }
              } />
              {/* <Route path="/Loadmore"
              exact render={
                () => {
                  return (<Loadmore />)
                }
              } /> */}
               <IndividualPages/>
            

          </div>
          <Footer />
        </div>
      </ Router >
    );
  }
}

export default App;
