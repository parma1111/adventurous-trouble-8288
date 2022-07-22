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
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/3d42df13-a169-43e3-82a0-e134d709aeb1.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/802dd327-0ec5-4d3d-9e0f-0e8c72e0ba76.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/d844f2ae-1718-4a6b-8203-97f2eacaf39b.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/e85a14c9-b94c-4415-aee5-5a361d9b7591.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/67b905b0-b029-43b3-b411-bbd6aeb1bcf1.jpg"></img>
 </div>
 <div>
 <img style={{ height: 310, width: 410 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/53ac6d17-0616-4ceb-8152-9ba9bd8d604f.jpg"></img>
 </div>
        </Slider>
      </div>
    );
  }
}

