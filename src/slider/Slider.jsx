import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import img from "../assets/433.jpg";

const Sliderimage = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <>
      <div className="slider_contaner">
        <div className="slider_maxwidth">
          <Slider {...settings}>
            <div>
              <img src={img} style={{ width: "1024px", height: "480px", borderRadius:"5px" }} />
            </div>
            <div>
              <img src={img} style={{ width: "1024px", height: "480px" ,borderRadius:"5px"}} />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Sliderimage;
