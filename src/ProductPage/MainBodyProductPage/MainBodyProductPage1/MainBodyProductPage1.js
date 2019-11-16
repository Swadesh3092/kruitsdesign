import React, { Component } from 'react'
import "./MainBodyProductPage1.css"

export default class MainBodyProductPage1 extends Component {
    render() {
        return (
            <div className="MainBodyProductPage1Container">
                <div className="subMainBodyProductPage1Container">
                    
                    <div className="MainProductPictureContainer">
                    <div className="MainProductPictureContainerInner">
                        
                     <div className="ProductPageImagesContainer"><img className="ProductPageImages" alt="KadduImage" src={require("./P1.jpg")}/></div>
                     <div className="ProductPageImagesContainer">   <img className="ProductPageImages" alt="KadduImage" src={require("./P2.jpg")}/></div>
                     <div className="ProductPageImagesContainer">   <img className="ProductPageImages" alt="KadduImage" src={require("./P3.jpg")}/></div>
                     <div className="ProductPageImagesContainer">   <img className="ProductPageImages" alt="KadduImage" src={require("./P4.jpg")}/></div>
                     <div className="ProductPageImagesContainer">   <img className="ProductPageImages" alt="KadduImage" src={require("./P5.jpg")}/></div>
                        
                        
                        </div>   
                    </div>
                    <div className="ProductBrandPriceandSizeDetails">
                        <div className="SidebarBrandPriceSize">
                            <div className="SidebarBrandNameProductName">
                                <div className="SidebarBrandNameProductName1">
                                    <div className="SidebarBrand"><div className="SidebarBrandWord">Nike</div></div>
                                    <div className="SidebarProductName"><div className="SidebarProductNameWord">Women Red Solid Fit & Flare Dress</div></div>
                                    <div className="ProductNameBottomBorder"></div>
                                </div>
                            </div>
                            <div className="Store">
                                <div className="StoreLogoName"><img className="StoreLogoNameImage" alt="KadduImage" src={require("./logo.png")}/> </div>
                            </div>
                            <div className="SidebarPrices">

                                <div className="SidebarPrices1">
                                    <div className="SidebarReal-Price">
                                        <div className="SidebarReal-Price1">Rs 1000</div>
                                    </div>
                                    <div className="SidebarDiscount_Price">
                                        <div className="SidebarDiscount_Price1">Rs 500
                                           </div>

                                    </div>
                                    <div className="SidebarPercentage" >
                                        <div className="SidebarPercentage1">
                                            (50% OFF)
                                             </div>
                                    </div>
                                </div>

                            </div>
                            <div className="SidebarSizes">
                                <div className="SidebarSizes1">
                                    <div className="SidebarSelectSizeWord"><div className="SidebarSelectSizeWord1">SELECT SIZE</div></div>
                                    <div className="Sizes">
                                        <div className="Sizes1">
                                            <div className="SidebarSizeSmall"><div className="SidebarSize1">S</div></div>
                                            <div className="SidebarSize"><div className="SidebarSize1">M</div></div>
                                            <div className="SidebarSize"><div className="SidebarSize1">L</div></div>
                                            <div className="SidebarSize"><div className="SidebarSize1">XL</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="SidebarBuyNowWhishlist">
                                <div className="SidebarBuyNowButton">
                                    <button className="SidebarBuyNowBInnerButton">
                                    <a href="https://www.myntra.com" className="ProductLink">
                                        <div className="SidebarBuyNowButton1">BUY NOW</div>
                                    </a>
                                    </button>
                                    </div>
                                {/* <div className="SidebarWishlist"></div> */}
                            </div>
                            <div className="SidebarOffers">
                                <div className="SidebarOffers1">
                                    <div className="Offer"><div className="OffersWord">OFFERS</div></div>
                                    <div className="OfferList">
                                        <div className="OfferList1">
                                            <ul className="OfferUnorderedList">
                                                <li className="ListItem">Applicable on: Orders above Rs. 1499 (only on first purchase)</li>
                                                <li className="ListItem">Coupon code: <b>MYNTRANEWW500</b></li>
                                                <li className="ListItem">Coupon Discount: Rs. 500 off, excluding tax (check cart for final savings)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductDetailsEndBorder"></div>
                        </div>
                        <div className="SidebarSizeFitDetails">
                        </div>
                        <div className="OtherInfoNeeded">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
