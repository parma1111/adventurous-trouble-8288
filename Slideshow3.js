import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{marginLeft: 70, marginRight: 70}}>
        <Slider {...settings}>
        <div> 
 <img style={{ height: 240, width: 280, }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/c94a0d07-3912-4b78-a502-ee10907b3a63.jpg"></img>
 </div>
 <div>
 <img style={{ height: 240, width: 280 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/17ea5862-3403-4b13-a7fc-e7736aaeee97.jpg"></img>
 </div>
 <div>
 <img style={{ height: 240, width: 280 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/c6b8c7af-0f0c-480a-b386-e6ce2985e103.jpg"></img>
 </div>
 <div>
 <img style={{ height: 240, width: 280 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a350df5-ba89-40a5-8a8e-e3e617139597.jpg"></img>
 </div>
 <div>
 <img style={{ height: 240, width: 280 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/3f3d8635-7613-4dab-8c99-a62b05db784f.jpg"></img>
 </div>
 <div>
 <img style={{ height: 240, width: 280 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/94392987-596e-4b14-b378-86a4b43544c0.jpg"></img>
 </div>
 <div>
 <img style={{ height: 240, width: 280 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/76b4a358-adfb-4f52-944b-8bb49f57b4a9.jpg"></img>
 </div>
        </Slider>
      </div>
    );
  }
}

