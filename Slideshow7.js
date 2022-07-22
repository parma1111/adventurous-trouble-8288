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
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{marginLeft: 30, marginRight: 30}}>
        <Slider {...settings}>
        <div> 
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/2589c084-0746-47b8-bbea-9150a035ce02.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/1e7e7626-944b-4b79-b60f-4f26e13801ed.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/17a7167c-09e5-4dcb-a73d-f74df79bf03b.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/3cf8cc3a-dff3-4984-88ac-3772b3d402a0.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/ea4d18b1-3c4d-483f-a723-c2c6f0b48e65.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/0f6acb92-2394-4185-a22a-e3a17252ccbe.jpg"></img>
 </div>
        </Slider>
      </div>
    );
  }
}

