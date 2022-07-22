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
      autoplaySpeed: 3000
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/9e904c5f-acaf-422a-956e-f91353fc3d09.jpg"></img>
            </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/eedba493-c795-435f-b323-a026045a571b.gif"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/cab9a296-0188-45c0-903a-c2da1c84fdbb.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg"></img>
          </div>
          <div>
            <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg"></img>
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