import React, { Component } from "react";
import "./ColorFilter.css";
const dummmyColors = [
  {
    color: "red"
  },
  {
    color: "blue"
  },
  {
    color: "green"
  },
  {
    color: "yellow"
  },
  {
    color: "violet"
  },
  {
    color: "orange"
  },
  {
    color: "black"
  },
  {
    color: "grey"
  }
];

export default class ColorFilter extends Component {
  render() {
    return (
      <div className="ColorFilter">
        <div className="ColorLabel">
          <h2>Color</h2>
        </div>
        <div className="Colorboxes">
          <div className="Colorboxes-line1">
            {dummmyColors.map((item, index) => {
              return (
                <div
                  className="ColorBox"
                  style={{ backgroundColor: item.color }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
