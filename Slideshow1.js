import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/36e44ab4-2b5b-4b5c-b35a-fb56a9c59f1a.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg"></img>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          </div>
          <br />
          <br />
      </div>
    );
  }
}