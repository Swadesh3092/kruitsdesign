import React, { Component } from "react";
import Route from 'react-router-dom/Route'
import MainBodyProductPage from "./ProductPage/MainBodyProductPage/MainBodyProductPage.js";
import MainBodyCatalogPage from "./MainBodyCatalogPage/MainBodyCatalogPage.js";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="MainContainer">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">kaddu</Link>
              </li>
            </ul>
            <Route path="/"
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

          </div>
        </div>
      </ Router >
    );
  }
}

export default App;
