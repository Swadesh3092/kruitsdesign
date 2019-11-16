import React,{Component} from 'react';
import "./Carousel.css";


import InfiniteCarousel from 'react-leaf-carousel';





export default class Carousel extends Component {
    
    
    render() {
        
        return (
           
                // <InfiniteCarousel
                //   breakpoints={[
                //     {
                //       breakpoint: 500,
                //       settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 2,
                //       },
                //     },
                //     {
                //       breakpoint: 768,
                //       settings: {
                //         slidesToShow: 3,
                //         slidesToScroll: 3,
                //       },
                //     },
                //   ]}
                //   dots={true}
                //   showSides={true}
                //   sidesOpacity={.5}
                //   sideSize={.1}
                //   slidesToScroll={4}
                //   slidesToShow={4}
                //   scrollOnDevice={true}
                // >
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img7.jpg'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img8.jpg'  />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img9.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img10.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img11.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img11.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img13.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img14.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img15.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img16.jpg'                    />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=cdf2c6&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=9fa616&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=2c4caa&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=44e3e1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6666&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='./MainPageImages/img7.jpg'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=29083c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ffff99&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=616161&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                //   <div>
                //     <img
                //       alt=''
                //       src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ed7ebe&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                //     />
                //   </div>
                // </InfiniteCarousel>
                <div className="CarouselContainer">
                  <div className="CarouselContainerInner">
                    <div className="CarouselContainer1">
                    <img className="CarouseImage" alt="ClothesIMage" src={require("./MainPageImages/carousel1.jpg")}/>
                      </div>
                    <div className="CarouselContainer2">
                    <img className="CarouseImage" alt="ClothesIMage" src={require("./MainPageImages/carousel2.jpg")}/>
                      </div>
                    <div className="CarouselContainer3">
                    <img className="CarouseImage" alt="ClothesIMage" src={require("./MainPageImages/carousel5.gif")}/>
                      </div>
                    <div className="CarouselContainer4">
                    <img className="CarouseImage" alt="ClothesIMage" src={require("./MainPageImages/carousel3.jpg")}/>
                      </div>
                    <div className="CarouselContainer5">
                    <img className="CarouseImage" alt="ClothesIMage" src={require("./MainPageImages/carousel4.jpg")}/>
                      </div>
                    </div>
                </div>
                
        )
    }
}
