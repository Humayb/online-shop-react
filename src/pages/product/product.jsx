import { AiOutlineShoppingCart,  AiOutlineSearch  } from "react-icons/ai";
// import { AiOutlineDown } from "react-icons/ai";

import slid1 from '../../img/dress-coat.jpg'
import slid2 from '../../img/SportShoe.jpg'
import slid3 from '../../img/jewel.jpg'
import slid4 from '../../img/redcoat.jpg'
import slid5 from '../../img/red-lipsticks-arrangement-high-angle.jpg'
import slid6 from '../../img/woman-using-smartwatch-smartwatch.jpg'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import './product.css'



export default function Product(){
    return(
        <div className="product">
            <Menu/>
            <MenuVertical/>
        </div>

    )
}

function Menu(){
    return(
        <div className="row flex-row border-bottom menu">
            <h4 className="col-sm-2">
                کالاهای پر بازدید
            </h4>
    </div>
    )
}

function MenuVertical(){


    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rtl: true,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        // variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return(
        <div className="row MenuVertical flex-row-reverse ">
            <Slider {...settings} className="col-12  slider">
                <div className="slider-items">
                    <img src={slid1} alt="" className="height-100" />
                </div>

                <div className="slider-items">
                    <img src={slid2} alt="" className=""  />
                </div>

                <div className="slider-items">
                    <img src={slid3} alt=""  />
                </div>
                
                <div className="slider-items">
                    <img src={slid4} alt="کت زنانه قرمز" />
                </div>

                <div className="slider-items">
                    <img src={slid5} alt="رژلب قرمز"  />
                </div>

                <div className="slider-items">
                    <img src={slid6} alt="ساعت هوشمند"  />
                </div>
        
            </Slider>

        </div>
    )
}

