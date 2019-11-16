import React, { Component } from 'react';

import Route from 'react-router-dom/Route'
import AboutUs from "./AboutUs/AboutUs.js";
import ContactUs from "./ContactUs/ContactUs.js";
import Blog from "./Blog/Blog.js";
import CookieNotice from "./CookieNotice/CookieNotice.js";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy.js";
import TermsOfService from "./TermsOfService/TermsOfService.js";

class IndividualPages extends Component {
    render() {
        return (
            <div className="IndividualPagesMain">
                <Route path="/AboutUs"
              exact render={
                () => {
                  return (<AboutUs />)
                }
              } />
               <Route path="/ContactUs"
              exact render={
                () => {
                  return (<ContactUs />)
                }
              } />
               
               <Route path="/Blog"
              exact render={
                () => {
                  return (<Blog />)
                }
              } />
              <Route path="/Cookie-Notice"
              exact render={
                () => {
                  return (<CookieNotice />)
                }
              } />
              <Route path="/Privacy-Policy"
              exact render={
                () => {
                  return (<PrivacyPolicy />)
                }
              } />
              <Route path="/Terms-Of-Service"
              exact render={
                () => {
                  return (<TermsOfService/>)
                }
              } />
            </div>
        );
    }
}

export default IndividualPages;