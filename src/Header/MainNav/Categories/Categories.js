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
        <button className="button" onClick={this.showDropdownMenu}>
          <div id="CategoriesContainerContent">{this.props.name}</div>
          
          {this.state.displayMenu ? (
            <div className="DropdownMenuFolderInvisible">
            <div className="DropdownMenuFolderContainer">
              <div className="DropdownMenuFolderContainerInner">
            <div className="DropdownBlock1">
            <ul className="Dropdown1">
              <li classname="DropdownCategoryList">
                <a href="/product" className="DropdownCategoryName">
                Topwear</a>
                </li>
                <li className="DropdownSubCategoryList"><a href="./product" className="DropdownSubCategoryName">T-Shirts</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Casual Shirts</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Formal Shirts</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Sweatshirts</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Jackets</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Suits</a></li> 

                <div className="Break"></div>

              <li classname="DropdownCategoryList"><a href="/product" className="DropdownCategoryName">Bottomwear</a></li>
              <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Jeans</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Casual Trousers</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Formal Trousers</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Shorts</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Track Pants & Joggers</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">Chinos</a></li>
                </ul>
              </div>
              <div className="DropdownBlock2">
            <ul className="Dropdown2">
            <li classname="DropdownCategoryList">
                <a href="/product" className="DropdownCategoryName">
                Topwear</a>
                </li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-1</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-2</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-3</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-4</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-5</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-6</a></li>
                <div className="Break"></div>
                
              <li classname="DropdownCategoryList"><a href="/product" className="DropdownCategoryName">Bottomwear</a></li>
              
              <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-1</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-2</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-3</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-4</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-5</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-6</a></li>
              </ul>
              </div>
              <div className="DropdownBlock3">
            <ul className="Dropdown3">
            <li classname="DropdownCategoryList">
                <a href="/product" className="DropdownCategoryName">
                Topwear</a>
                </li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-1</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-2</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-3</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-4</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-5</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-6</a></li>
                <div className="Break"></div>
                
              <li classname="DropdownCategoryList"><a href="/product" className="DropdownCategoryName">Bottomwear</a></li>
              
              <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-1</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-2</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-3</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-4</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-5</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-6</a></li>
              </ul>
              </div>
              <div className="DropdownBlock4">
            <ul className="Dropdown4">
            <li classname="DropdownCategoryList">
                <a href="/product" className="DropdownCategoryName">
                Topwear</a>
                </li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-1</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-2</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-3</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-4</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-5</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-6</a></li>
                <div className="Break"></div>
                
              <li classname="DropdownCategoryList"><a href="/product" className="DropdownCategoryName">Bottomwear</a></li>
              
              <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-1</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-2</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-3</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-4</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-5</a></li>
                <li className="DropdownSubCategoryList"><a href="/product" className="DropdownSubCategoryName">item-6</a></li>
              </ul>
              </div>
              </div>
            </div>
            </div>) : null}
          
        </button>
      </div>
    );
  }
}
