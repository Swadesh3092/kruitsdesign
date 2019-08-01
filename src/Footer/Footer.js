import React, { Component } from "react";
import FooterBlocks from "./FooterBlocks/FooterBlocks.js";
import "./Footer.css";
const Footer1Data = [
  { name: "WOMEN" },
  { name: "MEN" },
  { name: "KIDS" },
  { name: "STORES" }
];
const Footer2Data = [
  { name1: "Kaddu" },
  { name1: "Kaddu" },
  { name1: "Kaddu" },
  { name1: "Kaddu" }
];

const Footer3Data = [
  { name2: "Kaddu" },
  { name2: "Kaddu" },
  { name2: "Kaddu" },
  { name2: "Kaddu" }
];

const Footer4Data = [
  { name3: "Kaddu" },
  { name3: "Kaddu" },
  { name3: "Kaddu" },
  { name3: "Kaddu" }
];
export default class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterBlocksContainer">
          <div className="Footer1Container">
            {Footer1Data.map((item, index) => {
              return <FooterBlocks name={item.name} />;
            })}
          </div>
          <div className="Footer2Container">
            {Footer2Data.map((item, index) => {
              return <FooterBlocks name1={item.name1} />;
            })}
          </div>
          <div className="Footer3Container">
            {Footer3Data.map((item, index) => {
              return <FooterBlocks name2={item.name2} />;
            })}
          </div>
          <div className="Footer4Container">
            {Footer4Data.map((item, index) => {
              return <FooterBlocks name3={item.name3} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
