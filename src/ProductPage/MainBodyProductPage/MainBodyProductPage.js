import React, { Component } from 'react'
import MainBodyProductPage1 from "./MainBodyProductPage1/MainBodyProductPage1.js"
import MainBodyProductPage2 from "./MainBodyProductPage2/MainBodyProductPage2.js"
import MainBodyProductPage3 from "./MainBodyProductPage3/MainBodyProductPage3.js"
import "./MainBodyProductPage.css"

export default class MainBodyProductPage extends Component {
  render() {
    return (

      <div className="MainBodyProductPageContainer">
        <div className="MainBodyProductPageContainerInner">
          <div>
            <MainBodyProductPage1 />
            <MainBodyProductPage2 />
            <MainBodyProductPage3 />
          </div>
        </div>
      </div>
    )
  }
}
