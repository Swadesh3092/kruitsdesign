import React, { Component } from "react";
import Categories from "./Categories/Categories.js";
import "./MainNav.css";
const dummyData = [
  { name: "WOMEN" },
  { name: "MEN" },
  {name:"HOME"},
  { name: "STORES" }
];

export default class MainNav extends Component {
  render() {
    return (
      <div className="MainNavContainer">
        <div className="MainNavContainer2">
          <div className="NewArrivalsContainer">
            <button className="button">
              <div className="NewArrivalsContentContainer">NEW ARRIVALS</div>
            </button>
          </div>
          {dummyData.map((item, index) => {
            return <Categories key={index} name={item.name} />;
          })}
        </div>
      </div>
    );
  }
}
