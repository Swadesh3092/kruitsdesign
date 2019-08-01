import React, { Component } from "react";
import Logo from "./Logo/Logo.js";
import MainNav from "./MainNav/MainNav.js";
import SearchBar from "./SearchBar/SearchBar.js";
import Wishlist from "./Wishlist/Wishlist.js";
import Profile from "./Profile/Profile.js";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <div className="SubHeaderContainer">
          <Logo />
          <MainNav />
          <SearchBar />
          <Wishlist />
          <Profile />
        </div>
      </div>
    );
  }
}
