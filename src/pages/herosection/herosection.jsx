import slid1 from '../../img/topslide1.jpg'
import slid2 from '../../img/topslide2.jpg'
import slid3 from '../../img/topslide3.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./herosection.css";

export default function HeroSection(){
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
      };
    return(
        <div className='slider-top'>
        <Slider {...settings} className="slider-hero">
          <div>
            <img src={slid1} alt="" className="d-block w-100" />
          </div>
          <div>
            <img src={slid2} alt="" className="d-block w-100"  />
          </div>
          <div>
            <img src={slid3} alt="" className="d-block w-100"  />
          </div>
        </Slider>
      </div>
    )
}


// export default function HeroSection(){
//     return(
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
//         <div className="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//             <div className="carousel-item active">
//                 <img src={slid1} className="d-block w-100" alt="..."/>
//             </div>
//             <div class="carousel-item">
//                 <img src={slid2} class="d-block w-100" alt="..."/>
//             </div>
//             <div class="carousel-item">
//                 <img src={slid3} className="d-block w-100" alt="..."/>
//             </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//         </button>
//     </div>
//     )
// }

