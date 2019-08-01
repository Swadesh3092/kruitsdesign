import React, { Component } from "react";
import "./Categories.css";

export default class Categories extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="CategoriesContainer">
        <button class="button" onClick={this.showDropdownMenu}>
          <div id="CategoriesContainerContent">{this.props.name}</div>
          {this.state.displayMenu ? (
            <ul className="Dropdown">
              <div className="list-container">
                <li>item-1</li>
                <li>item-2</li>
                <li>item-3</li>
              </div>
            </ul>
          ) : null}
        </button>
      </div>
    );
  }
}
