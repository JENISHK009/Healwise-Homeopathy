import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isAnimating: false,
    };

    this.banners = [
      {
        id: 1,
        title: "Welcome to Our Clinic",
        subtitle: "Your health, our priority",
        image:
          "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/zrwflnu8oo9siyrwf8ji.jpg",
      },
      {
        id: 2,
        title: "Expert Care",
        subtitle: "Professional and personalized healthcare",
        image:
          "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/az33uhudyffi2fjtafx4.jpg",
      },
      {
        id: 3,
        title: "State-of-the-Art Facilities",
        subtitle: "Equipped with the latest technology",
        image:
          "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/oybz7snsfkl8wdm8cczy.jpg",
      },
    ];
  }

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.slideInterval = setInterval(this.nextSlide, 5000); // Automatically change the slide every 5 seconds
  };

  stopSlideshow = () => {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  };

  nextSlide = () => {
    if (this.state.isAnimating) return;

    this.setState((prevState) => ({
      isAnimating: true,
      current: (prevState.current + 1) % this.banners.length,
    }));

    setTimeout(() => this.setState({ isAnimating: false }), 500);
  };

  render() {
    const { current } = this.state;

    return (
      <div className='banner-wrapper'>
        <div className='banner'>
          {this.banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${current === index ? "active" : ""}`}>
              <div className='banner-container'>
                <div className='banner-flex'>
                  <div className='banner-content'>
                    <div className='content-wrapper'>
                      <h1 className='banner-title'>{banner.title}</h1>
                      <p className='banner-subtitle'>{banner.subtitle}</p>
                      <div className='banner-buttons'>
                        <button className='banner-btn primary-btn'>
                          Learn More
                          <span className='btn-hover'></span>
                        </button>
                        <button className='banner-btn secondary-btn'>
                          Contact Us
                          <span className='btn-hover'></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='banner-image-container'>
                    <div className='banner-image-wrapper'>
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className='banner-image'
                      />
                      <div className='image-overlay'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Banner;
