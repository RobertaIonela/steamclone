import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideShow.css";

const SlideShow = () => {
  const slides = [
    {
      image: require("./images/slide1.jpg"),
      description: "Cele mai bune jocuri se gasesc doar aici",
    },
    {
      image: require("./images/slide2.jpg"),
      description: "Reduceri de nerefuzat",
    },
    {
      image: require("./images/slide3.jpg"),
      description: "Multe jocuri gratuite",
    },
    {
      image: require("./images/slide4.jpg"),
      description: "Concursuri saptamanale",
    },
    {
      image: require("./images/slide5.jpg"),
      description: "Premii zilnice",
    },
    {
      image: require("./images/slide6.jpg"),
      description: "Cele mai noi update-uri",
    },
    {
      image: require("./images/slide7.jpg"),
      description: "Asistenta non-stop",
    },
    {
      image: require("./images/slide8.jpg"),
      description: "Cele mai noi jocuri",
    },
    {
      image: require("./images/slide7.jpg"),
      description: "Nu te poti plictisi niciodata",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slide-show-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-description">{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
