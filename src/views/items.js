import '../styles/items.css'
import Slider from "react-slick";
import { Component } from "react";

const images = [
  {
    id:"1",
    url: "../images/Asset 1.png"
  },
  {
    id: "2",
    url: "../images/Asset 2.png"
  }
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {images.map((image) => {
          return (
            <div className="wrapper" key="">
              <img
                className="sliderImg"
                src={image.url}
                alt={image.alt}
              />
              <p>{image.name}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}