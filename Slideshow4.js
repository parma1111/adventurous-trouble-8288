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
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/e1ac6ed0-3965-4371-9eb4-55592bc79bf7.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/7145deaa-8296-49ba-9964-061fded28226.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/2cd03446-33d8-47df-982a-3991ac582be1.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/d81e88d8-712e-4e18-90f2-93bd27236050.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/7b817474-27aa-4c69-816d-960bfbc1d2a9.jpg"></img>
 </div>
        </Slider>
      </div>
    );
  }
}

