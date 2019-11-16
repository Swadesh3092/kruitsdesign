import React, { Component } from 'react';

import "./HomePage.css"
import Carousel from "./Carousel.js"

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePageBodyContainer">
                <div className="HomePageBodyInner">
                   <div className="HomePageSection1">
                   <div className="HeroBanner"><img className="HeroBannerImage" alt="HeroBannerImage" src={require("./MainPageImages/HeroImage.gif")} /></div>
                       
                   </div>
                   <div className="HomePageSection2">
                       <div className="HomePageSection2Inner">

                           <div className="HomePageSection2HorizontalPartition1">
                               <div className="CategoriesWord1"><h2>Categories</h2></div>
                               <div className="Categories1Caption"><p className="Categories1CaptionInner">We’ve scoured the web to find all the best deals. Shop them here.</p></div>
                            </div>
                            <div className="HomePageSection2HorizontalPartition2">
                            <div className="HomePageSection2HorizontalPartition2VerticalPartition1">
                                <div className="HomePageSection2Categories1"><img className="HomePageSection2Categories1Image" alt="KadduImage" src={require("./MainPageImages/img2.jpg")}/></div>
                                <div className="HomePageSection2Categories2"><img className="HomePageSection2Categories2Image" alt="KadduImage2" src={require("./MainPageImages/img4.jpg")}/></div>
                            </div>
                            <div className="HomePageSection2HorizontalPartition2VerticalPartition2">
                                <div className="HomePageSection2Categories3"><img className="HomePageSection2Categories3Image" alt="KadduImage3" src={require("./MainPageImages/img3.jpg")}/></div>
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="HomePageSection3">
                        <Carousel/>
                    </div>
                    <div className="HomePageSection4">
                        <div className="banner"><img className="bannerImage" alt="KadduImage" src={require("./MainPageImages/banner.png")}/></div>
                    </div>
                    <div className="HomePageSection5">
                       <div className="HomePageSection5Inner">

                           <div className="HomePageSection5HorizontalPartition1">
                               <div className="CategoriesWord1"><h2 >Top Stores</h2></div>
                               <div className="Categories1Caption"><p className="Categories1CaptionInner">All your favourite brands together. Shop them here.</p></div>
                            </div>
                            <div className="HomePageSection5HorizontalPartition2">
                            <div className="HomePageSection5HorizontalPartition2VerticalPartition1">
                                <div className="HomePageSection5Categories1"><img className="HomePageSection5Categories1Image" alt="KadduImage" src={require("./MainPageImages/img2.jpg")}/></div>
                                <div className="HomePageSection5Categories2"><img className="HomePageSection5Categories2Image" alt="KadduImage2" src={require("./MainPageImages/img4.jpg")}/></div>
                            </div>
                            <div className="HomePageSection5HorizontalPartition2VerticalPartition2">
                                <div className="HomePageSection5Categories3"><img className="HomePageSection5Categories3Image" alt="KadduImage3" src={require("./MainPageImages/img3.jpg")}/></div>
                            </div>

                            </div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

