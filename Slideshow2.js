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
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif"></img>
          </div>
          <div>
          <img style={{ height: 350 }} src="https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif"></img>
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