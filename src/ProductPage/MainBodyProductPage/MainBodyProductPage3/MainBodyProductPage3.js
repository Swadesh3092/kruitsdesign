import React, { Component } from 'react'
import "./MainBodyProductPage3.css"

export default class MainBodyProductPage3 extends Component {
    render() {
        return (
            <div className="MainBodyProductPage3Container">
                <div className="MainBodyProductPage3ContainerInner">
                    <div className="SuggestedProductsHeader"><div className="SuggestedProductsHeader1"><h2><u>PEOPLE <i> ALSO </i> LOVED</u></h2></div></div>
                    <div className="SuggestedProducts">
                        <div className="SuggestedProductsInner">
                            <div className="SuggestedProducts1">
                                <div className="Product">
                                    <div className="Image">
                                        <img
                                            className="ImageTag"
                                        // src={imageBasePath + this.props.image}
                                        alt="this is awesome"
                                        />
                                    </div>
                                    <div className="BelowImage1">
                                        <div className="PriceandDesc">
                                            <div className="Desc">
                                                <h3> {this.props.title} </h3>
                                            </div>
                                            <div className="Prices">
                                                <div className="Prices1">
                                                    <div className="Real-Price">
                                                        <div className="Real-Price1">Rs 500</div>
                                                        {/* {this.props.popularity} */}
                                                    </div>
                                                    <div className="Discount_Price">
                                                        <div className="Discount_Price1">Rs 500
                                                        </div>

                                                    </div>
                                                    <div className="Percentage" >
                                                        <div className="Percentage1">
                                                            50%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="BuynowandWishlist">
                                                <div className="BuyNow">
                                                    <div className="BuyNow1">
                                                        BUY NOW
                                                    </div>
                                                </div>
                                                {/* <div className="Wishlist">
                                                    <div className="Wishlist1">
                                                        WISHLIST
                                                     </div>

                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
